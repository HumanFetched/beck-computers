import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import moment from 'moment';
import csv from 'papaparse';
import { FilterQuery, PaginateModel, PaginateOptions, Types } from 'mongoose';
import { FindOneDto, ListDto } from 'src/common-dto';
import {
  decodeListFields,
  extractDomain,
  getListQuery,
  multipleQuery,
} from 'src/utils/helper';
import { User } from '../users/entities/user.entity';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Events } from './entities/event.entity';
import mongoParser from 'mongodb-query-parser';
import { ExportCSVDto } from './dto/exportCSV-dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Events.name)
    private readonly eventsModel: PaginateModel<Events>,
    private configService: ConfigService,
  ) {}

  async create(
    xApiKey: string,
    createEventDto: CreateEventDto,
    userId: Types.ObjectId,
  ) {
    // validating data
    if (xApiKey !== this.configService.get('nse.NSE_SECRET_KEY')) {
      throw new UnauthorizedException('Unauthrorized');
    }

    const eventData = new this.eventsModel({
      ...createEventDto,
      user: userId,
      domain: extractDomain(createEventDto?.sender) || '',
    });
    const event = await eventData.save();
    return { result: event };
  }

  async findAll(listEventsDto: ListDto, user: User) {
    const { page, limit, query, fields, sort, fromDuration, toDuration } =
      getListQuery(listEventsDto);
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
    return await this.eventsModel.paginate(
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

  async findOneByQuery(options: FilterQuery<Events>) {
    const event = await this.eventsModel.findOne(options);
    return { result: event };
  }

  async findAllByQuery(options: FilterQuery<Events>) {
    const events = await this.eventsModel.find(options);
    if (events.length < 1) {
      throw new NotFoundException('Event not found');
    }
    return { results: events };
  }

  async update(_id: string, updateEventDto: UpdateEventDto) {
    const event = await this.eventsModel.findOneAndUpdate(
      { _id },
      { ...updateEventDto },
      { new: true },
    );
    if (!event) {
      throw new NotFoundException('Event either not found or cannot update');
    }
    return { result: event };
  }

  async search(searchEventsDto: ListDto, user: User) {
    const { page, limit, fields, q, sort, query } =
      getListQuery(searchEventsDto);
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

    const events = await this.eventsModel.paginate(
      {
        ...query,
        $text: { $search: q },
        user: user._id,
      },
      options,
    );
    return events;
  }

  async findOne({ _id, fields }: FindOneDto) {
    const listFields = decodeListFields(fields);
    const event = await this.eventsModel
      .findOne({ _id })
      .lean()
      .populate(['group', 'providerDetails', 'emailProvider'])
      .select(listFields);

    if (!event) {
      throw new NotFoundException(`Event not found`);
    }
    return { result: event };
  }

  private createCsv(
    events: (Events & {
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
      sender: 'Sender (FROM)',
      recipient: 'Recipient (TO)',
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

    events.map((data) => {
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

  async searchExportCSV(searchEventsDto: ListDto, user: User) {
    const { q, fields, query } = getListQuery(searchEventsDto);
    const events = await this.eventsModel
      .find({
        ...query,
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
    if (!events?.length) {
      throw new NotFoundException('Events not found');
    }
    const csvReport = Buffer.from(this.createCsv(events, fields as string));
    return csvReport;
  }

  async exportCSV(exportCSVDto: ExportCSVDto, user: User) {
    const query = multipleQuery(
      exportCSVDto.options.filter as Record<string, unknown>,
    );
    const listFields = decodeListFields(exportCSVDto.options.fields);
    const event = await this.eventsModel
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
    if (!event?.length) {
      throw new NotFoundException('Events not found');
    }
    const csvReport = Buffer.from(this.createCsv(event, listFields as string));
    return csvReport;
  }

  async deleteAllByQuery(options: FilterQuery<Events>) {
    const notificationsSettings = await this.eventsModel.deleteMany(options);
    return {
      status: 'SUCCESS',
      deletedCount: notificationsSettings?.deletedCount || 0,
    };
  }
}
