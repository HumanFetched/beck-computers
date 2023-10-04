import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import axios from 'axios';
import { FilterQuery, PaginateModel, PaginateOptions, Types } from 'mongoose';
import { FindOneDto, ListDto } from 'src/common-dto';
import { SENDMAIL_PRODUCER_EVENT_TYPE } from 'src/utils/constants';
import {
  decodeListFields,
  getIntermediateDates,
  getListQuery,
  multipleQuery,
} from 'src/utils/helper';
import { CloudStorageService } from '../cloud-storage/cloud-storage.service';
import { ProviderGroupsService } from '../provider-groups/provider-groups.service';
import { User } from '../users/entities/user.entity';
import { CreateEmailReportDto } from './dto/create-email-report.dto';
import { ExportEmailReportDto } from './dto/export-email-report.dto';
import { ListTrafficDto } from '../traffic/dto/list-traffic.dto';
import { ExportCSVDto } from './dto/exportCSV-dto';
import { UpdateEmailReportDto } from './dto/update-email-report.dto';
import { EmailReports } from './entities/email-report.entity';
import csv from 'papaparse';
import moment from 'moment';
import mongoParser from 'mongodb-query-parser';
import { DurationDto } from '../dashboard/dto/duration.dto';

@Injectable()
export class EmailReportsService {
  constructor(
    @InjectModel(EmailReports.name)
    private readonly emailReportsModel: PaginateModel<EmailReports>,

    private configService: ConfigService,
    private providerGroupService: ProviderGroupsService,
    private cloudStorageService: CloudStorageService,
  ) {}

  async create(
    xApiKey: string,
    createEmailReportDto: CreateEmailReportDto,
    userId?: Types.ObjectId,
  ) {
    // validating data
    if (xApiKey !== this.configService.get('nse.NSE_SECRET_KEY')) {
      throw new UnauthorizedException('Unauthrorized');
    }

    let user = userId;
    if (createEmailReportDto.group && !userId) {
      const { result: groupData } = await this.providerGroupService.findOne({
        _id: createEmailReportDto.group,
        fields: 'name user',
      });
      user = groupData.user;
    }

    // save email report
    const reportData = new this.emailReportsModel({
      ...createEmailReportDto,
      user,
      domain:
        createEmailReportDto?.sender?.split('@')?.pop()?.replace('>', '') || '',
    });
    const report = await reportData.save();
    return { result: report };
  }

  async findAll(listEmailReportDto: ListDto, user: User) {
    const { page, limit, query, fields, sort, fromDuration, toDuration } =
      getListQuery(listEmailReportDto);
    const options: PaginateOptions = {
      page,
      limit,
      pagination: true,
      customLabels: {
        docs: 'results',
      },
      populate: ['group', 'providerDetails', 'emailProvider'],
      select: `${fields}`,
      sort: {
        createdAt: -1,
        ...sort,
      },
    };
    return await this.emailReportsModel.paginate(
      {
        ...query,
        user: user._id,
        ...(fromDuration &&
          toDuration && {
            createdAt: { $gte: fromDuration, $lte: toDuration },
          }),
      },
      options,
    );
  }

  async findOne({ _id, fields }: FindOneDto) {
    const listFields = decodeListFields(fields);
    const emailReport = await this.emailReportsModel
      .findOne({ _id })
      .lean()
      .populate(['group', 'providerDetails', 'emailProvider'])
      .select(listFields);

    if (!emailReport) {
      throw new NotFoundException(`Report not found`);
    }
    return { result: emailReport };
  }

  async findOneByQuery(options: FilterQuery<EmailReports>) {
    const emailReport = await this.emailReportsModel.findOne(options);
    return { result: emailReport };
  }

  async findAllByQuery(options: FilterQuery<EmailReports>) {
    const emailReport = await this.emailReportsModel.find(options);
    if (!emailReport) {
      throw new NotFoundException('Report not found');
    }
    return { result: emailReport };
  }

  async update(_id: string, updateEmailReportDto: UpdateEmailReportDto) {
    const emailReport = await this.emailReportsModel.findOneAndUpdate(
      { _id },
      { ...updateEmailReportDto },
      { new: true },
    );
    if (!emailReport) {
      throw new NotFoundException('Report either not found or cannot update');
    }
    return { result: emailReport };
  }

  async remove(_id: string, user: User) {
    await this.emailReportsModel.deleteOne({ _id, user: user._id });
    return {
      status: 'SUCCESS',
      id: _id,
    };
  }

  async search(listEmailReportDto: ListDto, user: User) {
    const { page, limit, fields, q, sort } = getListQuery(listEmailReportDto);
    const options: PaginateOptions = {
      page,
      limit,
      customLabels: {
        docs: 'results',
      },
      select: `${fields}`,
      sort: {
        createdAt: -1,
        ...sort,
      },
    };

    const emailReport = await this.emailReportsModel.paginate(
      {
        $text: { $search: q },
        user: user._id,
      },
      options,
    );
    return emailReport;
  }

  async exportToCloudStorage(
    exportEmailReportDto: ExportEmailReportDto,
    user: User,
  ) {
    const cloudStorageData = await this.cloudStorageService.findOneByQuery({
      cloudStorageName: exportEmailReportDto.cloudPlatform,
      user: user._id,
    });
    if (!cloudStorageData) {
      throw new NotFoundException(
        'Configurations for the given cloud platform not found',
      );
    }

    const payload = {
      eventType: SENDMAIL_PRODUCER_EVENT_TYPE.exportReportsToCloudStorage,
      data: {
        cloudStorageId: cloudStorageData.result._id.toString(),
        fromDuration: exportEmailReportDto.fromDuration,
        toDuration: exportEmailReportDto.toDuration,
      },
    };

    try {
      await axios.post(
        this.configService.get('sqs.SEND_EMAIL_PRODUCER_URL'),
        payload,
      );
      return { message: 'Reports will be uploaded to drive in sometime.' };
    } catch (error) {
      throw new NotAcceptableException('sqs services down');
    }
  }

  async getNotifiedCountsInADay(query: Record<string, unknown>) {
    const reportCount = await this.emailReportsModel.countDocuments({
      ...query,
      isNotified: true,
      notifiedAt: { $gte: new Date().setHours(0, 0, 0, 0) },
    });
    return { count: reportCount };
  }

  private createCsv(
    emailReports: (EmailReports & {
      _id: Types.ObjectId;
      updatedAt?: Date;
      createdAt?: Date;
    })[],
    listFields?: string,
  ) {
    const fields = listFields.split(' ');
    // pick required fields through maping object
    const fieldsMapWithHeaders = {
      domain: 'Domain',
      group: 'GROUP: Vendor',
      providerDetails: 'Display Name',
      emailProvider: 'Provider Name',
      sender: 'From Email',
      recipient: 'To Email',
      status: 'Status',
      error: 'Error',
      subject: 'Subject',
      notificationFrom: 'From (Notified)',
      notificationTo: 'To (Notified)',
      isNotified: 'Notified',
      bounceDetailShort: 'Bounce Detail (Short)',
      bounceDetailLong: 'Bounce Detail (Long)',
      createdAt: 'Timestamp',
      updatedAt: 'Timestamp',
      notifiedAt: 'Timestamp',
    };
    // create csv data
    const rows = [];
    rows.push([...fields.map((ele) => fieldsMapWithHeaders[ele])]);

    emailReports.map((data) => {
      // pick required fields through maping object
      const fieldsMapWithData = {
        domain: data?.domain || 'NA',
        group: data?.group?.name || 'NA',
        providerDetails: data?.providerDetails?.apiDetails?.displayName || 'NA',
        emailProvider: data?.emailProvider?.name || 'NA',
        sender: data?.sender || 'NA',
        recipient: data?.recipient || 'NA',
        status: data?.status || 'NA',
        error: data?.error || 'NA',
        subject: data?.subject || 'NA',
        notificationFrom: data?.notificationFrom || 'NA',
        notificationTo:
          data?.notificationTo?.toString()?.replace(',', '\n') || 'NA',
        isNotified:
          data?.isNotified === false && data?.notificationTo?.length === 0
            ? 'Not Setup'
            : data?.isNotified
            ? 'yes'
            : 'No' || 'No',
        bounceDetailShort: data?.bounceDetailShort || 'NA',
        bounceDetailLong: data?.bounceDetailLong || 'NA',
        notifiedAt:
          (data?.notifiedAt &&
            moment(data?.notifiedAt).format('ddd, DD-MM-YYYY, h:mm:ss a')) ||
          'NA',
        updatedAt:
          (data?.updatedAt &&
            moment(data?.updatedAt).format('ddd, DD-MM-YYYY, h:mm:ss a')) ||
          'NA',
        createdAt:
          (data?.createdAt &&
            moment(data?.createdAt).format('ddd, DD-MM-YYYY, h:mm:ss a')) ||
          'NA',
      };
      rows.push([...fields.map((ele) => fieldsMapWithData[ele])]);
    });
    //create csv
    const csvData = csv.unparse(rows);
    return csvData;
  }

  async exportCSV(exportCSVDto: ExportCSVDto, user: User) {
    const query = multipleQuery(
      exportCSVDto.options.filter as Record<string, unknown>,
    );
    const listFields = decodeListFields(exportCSVDto.options.fields);
    const report = await this.emailReportsModel
      .find({
        ...query,
        ...(exportCSVDto.fromDuration &&
          exportCSVDto.toDuration && {
            createdAt: {
              $gte: exportCSVDto.fromDuration,
              $lte: exportCSVDto.toDuration,
            },
          }),
        user: user._id,
      })
      .sort({
        createdAt: -1,
        ...mongoParser(exportCSVDto.options.sort),
      })
      .populate([
        { path: 'group', select: 'name' },
        {
          path: 'providerDetails',
          select: 'apiDetails',
        },
        { path: 'emailProvider', select: 'name' },
      ]);
    if (!report?.length) {
      throw new NotFoundException('Email reports not found');
    }
    const csvReport = Buffer.from(this.createCsv(report, listFields as string));
    return csvReport;
  }

  async searchExportCSV(listEmailReportDto: ListDto, user: User) {
    const { q, fields } = getListQuery(listEmailReportDto);
    const report = await this.emailReportsModel
      .find({
        $text: { $search: q },
        user: user._id,
      })
      .populate([
        { path: 'group', select: 'name' },
        {
          path: 'providerDetails',
          select: 'apiDetails',
        },
        { path: 'emailProvider', select: 'name' },
      ])
      .sort({
        createdAt: -1,
      });
    if (!report?.length) {
      throw new NotFoundException('Email reports not found');
    }
    const csvReport = Buffer.from(this.createCsv(report, fields as string));
    return csvReport;
  }

  async listNotificationsMonitor(
    listNotificationsMonitorDto: ListDto,
    user: User,
  ) {
    const { page, limit, query, fields, sort } = getListQuery(
      listNotificationsMonitorDto,
    );
    const options: PaginateOptions = {
      page,
      limit,
      pagination: true,
      customLabels: {
        docs: 'results',
      },
      select: `${fields}`,
      populate: [
        {
          path: 'group',
        },
        {
          path: 'providerDetails',
        },
        {
          path: 'emailProvider',
        },
      ],
      sort: {
        createdAt: -1,
        ...sort,
      },
    };
    return await this.emailReportsModel.paginate(
      {
        ...query,
        user: user._id,
      },
      options,
    );
  }

  async trafficCounts(listTrafficDto: ListTrafficDto, user: User) {
    const parsedFromDuration = decodeURIComponent(listTrafficDto.fromDuration);
    const parsedToDuration = decodeURIComponent(listTrafficDto.toDuration);
    const fromDate = moment(listTrafficDto.fromDuration);
    const toDate = moment(listTrafficDto.toDuration);
    const dateCount = toDate.diff(fromDate, 'days');

    let trafficResult;
    const isWeekly = dateCount > 31 ? true : false;

    if (isWeekly) {
      trafficResult = await this.emailReportsModel.aggregate([
        {
          $match: {
            status: { $in: ['FAILED', 'DELIVERED', 'BOUNCE'] },
            user: user._id,
            createdAt: {
              $gte: new Date(parsedFromDuration),
              $lte: new Date(parsedToDuration),
            },
          },
        },
        {
          $project: {
            status: 1,
            createdAt: 1,
            week: { $isoWeek: '$createdAt' },
            weekStart: {
              $dateToString: {
                format: '%Y-%m-%d',
                date: {
                  // convert date
                  $subtract: [
                    '$createdAt',
                    {
                      $multiply: [
                        { $subtract: [{ $isoDayOfWeek: '$createdAt' }, 1] },
                        86400000,
                      ],
                    },
                  ],
                },
              },
            },
          },
        },
        {
          $group: {
            _id: {
              status: '$status',
              week: '$week',
            },
            date: { $first: '$weekStart' },
            count: { $sum: 1 },
          },
        },
        {
          $sort: {
            date: 1,
          },
        },
      ]);
    } else {
      trafficResult = await this.emailReportsModel.aggregate([
        {
          $match: {
            status: { $in: ['FAILED', 'DELIVERED', 'BOUNCE'] },
            user: user._id,
            createdAt: {
              $gte: new Date(parsedFromDuration),
              $lte: new Date(parsedToDuration),
            },
          },
        },
        {
          $project: {
            status: 1,
            createdAt: {
              $substr: ['$createdAt', 0, 10],
            },
          },
        },
        {
          $group: {
            _id: {
              date: '$createdAt',
              status: '$status',
            },
            count: {
              $sum: 1,
            },
          },
        },
        {
          $sort: {
            '_id.date': 1,
          },
        },
      ]);
    }

    const allDates = getIntermediateDates(
      isWeekly ? trafficResult[0].date : new Date(parsedFromDuration),
      new Date(parsedToDuration),
      isWeekly ? 7 : 1,
    );

    const results = {
      delivered: {
        date: [...allDates],
        count: new Array(allDates.length).fill(0),
      },
      failed: {
        date: [...allDates],
        count: new Array(allDates.length).fill(0),
      },
      bounce: {
        date: [...allDates],
        count: new Array(allDates.length).fill(0),
      },
    };

    trafficResult.forEach((result) => {
      const status = result._id.status.toLowerCase();
      const index = results[status].date?.indexOf(
        isWeekly ? result.date : result._id.date,
      );
      results[status].count[index] = result.count;
    });
    return { results };
  }

  async totalCountWidget(durationDto: DurationDto, user: User) {
    const parsedFromDuration = decodeURIComponent(durationDto.fromDuration);
    const parsedToDuration = decodeURIComponent(durationDto.toDuration);

    const totalCountWidgetResult = await this.emailReportsModel.aggregate([
      {
        $match: {
          status: {
            $in: [
              'SENT',
              'FAILED',
              'DELIVERED',
              'BOUNCE',
              'QUEUED',
              'DEFERRED',
              'DROPPED',
            ],
          },
          user: user._id,
          ...(durationDto.fromDuration &&
            durationDto.toDuration && {
              createdAt: {
                $gte: new Date(parsedFromDuration),
                $lte: new Date(parsedToDuration),
              },
            }),
        },
      },
      {
        $group: {
          _id: {
            status: '$status',
          },
          count: {
            $sum: 1,
          },
        },
      },
    ]);
    return { results: totalCountWidgetResult };
  }

  async hourlyMailSentWidget(durationDto: DurationDto, user: User) {
    const parsedFromDuration = decodeURIComponent(durationDto.fromDuration);
    const parsedToDuration = decodeURIComponent(durationDto.toDuration);
    const hourlyMailSentWidgetResult = await this.emailReportsModel.aggregate([
      {
        $match: {
          status: {
            $in: ['SENT', 'DELIVERED', 'BOUNCE', 'QUEUED'],
          },
          user: user._id,
          ...(durationDto.fromDuration &&
            durationDto.toDuration && {
              createdAt: {
                $gte: new Date(parsedFromDuration),
                $lte: new Date(parsedToDuration),
              },
            }),
        },
      },
      {
        $count: 'hourlyMailsSent',
      },
    ]);
    return { results: hourlyMailSentWidgetResult };
  }

  async rejectedTypeWidget(durationDto: DurationDto, user: User) {
    const parsedFromDuration = decodeURIComponent(durationDto.fromDuration);
    const parsedToDuration = decodeURIComponent(durationDto.toDuration);
    const rejectedTypeWidgetResult = await this.emailReportsModel.aggregate([
      {
        $facet: {
          mailLimitExceed: [
            {
              $match: {
                status: 'FAILED',
                error: {
                  $eq: 'Mail limit exceed',
                },
                user: user._id,
                ...(durationDto.fromDuration &&
                  durationDto.toDuration && {
                    createdAt: {
                      $gte: new Date(parsedFromDuration),
                      $lte: new Date(parsedToDuration),
                    },
                  }),
              },
            },
            {
              $count: 'count',
            },
          ],
          others: [
            {
              $match: {
                status: 'FAILED',
                error: {
                  $ne: 'Mail limit exceed',
                },
                user: user._id,
                ...(durationDto.fromDuration &&
                  durationDto.toDuration && {
                    createdAt: {
                      $gte: new Date(parsedFromDuration),
                      $lte: new Date(parsedToDuration),
                    },
                  }),
              },
            },
            {
              $count: 'count',
            },
          ],
        },
      },
    ]);
    return { results: rejectedTypeWidgetResult };
  }
}
