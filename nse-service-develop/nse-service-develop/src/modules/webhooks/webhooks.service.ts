import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel, PaginateOptions, Types } from 'mongoose';
import { ListDto } from 'src/common-dto';
import { extractDomain, getListQuery } from 'src/utils/helper';
import { CreateWebhooksDto } from './dto/create-webhooks.dto';
import { UpdateWebhooksDto } from './dto/update-webhooks.dto';
import { Webhooks } from './entities/webhooks.entity';
import { User } from '../users/entities/user.entity';
import { webhookProvidersAdaptor } from './webhook-providers.adaptor';
import { EmailReportsService } from '../email-reports/email-reports.service';
import axios from 'axios';
import { SENDMAIL_PRODUCER_EVENT_TYPE } from 'src/utils/constants';
import { ConfigService } from '@nestjs/config';
import { NotificationsSettingsService } from '../notifications-settings/notifications-settings.service';
import { NotificationsSettings } from '../notifications-settings/entities/notifications-settings.entity';
import { EmailProvidersService } from '../email-providers/email-providers.service';
import { CaptureResponseDto } from './dto/capture-response.dto';
import { EventsService } from '../events/events.service';
@Injectable()
export class WebhooksService {
  constructor(
    @InjectModel(Webhooks.name)
    private readonly webhooksModel: PaginateModel<Webhooks>,
    private emailReportsService: EmailReportsService,
    private emailProvidersService: EmailProvidersService,
    private notificationsSettingsService: NotificationsSettingsService,
    private configService: ConfigService,
    private eventsServices: EventsService,
  ) {}

  async create(createWebhooksDto: CreateWebhooksDto, user: User) {
    const checkValidProvider = await this.emailProvidersService.findOne({
      _id: createWebhooksDto.provider,
    });

    if (!checkValidProvider) {
      throw new NotAcceptableException('Invalid provider');
    }

    const webhooksData = new this.webhooksModel({
      ...createWebhooksDto,
      user: user._id,
    });
    const webhooks = await webhooksData.save();
    return { result: webhooks };
  }

  async findAll(listWebhooksDto: ListDto, user: User) {
    const { page, limit, query, fields, sort } = getListQuery(listWebhooksDto);
    const options: PaginateOptions = {
      page,
      limit,
      pagination: true,
      customLabels: {
        docs: 'results',
      },
      select: `${fields}`,
      sort: {
        createdAt: -1,
        ...sort,
      },
    };
    return await this.webhooksModel.paginate(
      {
        ...query,
        user: user._id,
      },
      options,
    );
  }

  async update(_id: string, updateWebhooksDto: UpdateWebhooksDto, user: User) {
    const webhooks = await this.webhooksModel.findOneAndUpdate(
      { _id, user: user._id },
      { ...updateWebhooksDto },
      { new: true },
    );
    if (!webhooks) {
      throw new NotFoundException('Webhook either not found or cannot update');
    }
    return { result: webhooks };
  }

  async remove(_id: string, user: User) {
    await this.webhooksModel.deleteOne({ _id, user: user._id });
    return {
      status: 'SUCCESS',
      id: _id,
    };
  }

  async captureResponse(captureResponse: CaptureResponseDto, user: User) {
    const foundEvents = await this.eventsServices.findAllByQuery({
      webhookId: captureResponse?.webhookId,
      user: user._id,
      createdAt: {
        $gte: captureResponse.captureTime,
      },
    });

    await this.eventsServices.deleteAllByQuery({
      webhookId: captureResponse?.webhookId,
      user: user._id,
      createdAt: {
        $gte: captureResponse.captureTime,
      },
    });
    return { result: foundEvents?.results };
  }

  async listenToEvents(id: string, body: any) {
    try {
      const webhooks = await this.webhooksModel.findOne({ _id: id }).lean();

      if (!webhooks) {
        return { status: 'Invalid webhook' };
      }

      if (!webhooks.isActive) {
        return { status: 'Webhook disabled' };
      }
      const { events, isValid } = webhookProvidersAdaptor(
        body,
        this.configService,
        webhooks.provider.toString(),
        webhooks.configurations,
      );

      if (!isValid || events?.length < 1) {
        return { status: 'Invalid body, not supported or events turned off' };
      }

      let isNotificationSendValid = true;

      const updateEventStatusData = events[events.length - 1];
      const foundReportEntry = await this.emailReportsService.findOneByQuery({
        referenceId: updateEventStatusData?.referenceId || null,
        user: webhooks.user._id,
      });
      const domainFromSenderId =
        foundReportEntry?.result?.domain ||
        extractDomain(updateEventStatusData.sender);

      let getNotificationsSettings: NotificationsSettings & {
        _id: Types.ObjectId;
      } = undefined;
      let count = 0;

      const senderEmail =
        foundReportEntry?.result?.sender || updateEventStatusData?.sender || '';

      const notificationsSettingsWithEmail =
        await this.notificationsSettingsService.findOneByQuery({
          domain: domainFromSenderId,
          email: senderEmail,
          user: webhooks.user,
        });

      getNotificationsSettings = notificationsSettingsWithEmail;

      // extract emails from the same domain configured on notification settings to filter out from counts
      let configuredMails = [];

      if (!notificationsSettingsWithEmail) {
        const notificationsSettingsWithEmails =
          await this.notificationsSettingsService.findAllByQuery({
            domain: domainFromSenderId,
            user: webhooks.user,
          });

        const notificationConfiguredEmails =
          notificationsSettingsWithEmails.result.reduce((acc, cur) => {
            if (cur.email) {
              acc.push(cur.email);
            }
            return acc;
          }, []);

        configuredMails = notificationConfiguredEmails;

        const notificationsSettingsWithDomain =
          await this.notificationsSettingsService.findOneByQuery({
            domain: domainFromSenderId,
            email: '',
            user: webhooks.user,
          });
        getNotificationsSettings = notificationsSettingsWithDomain;
        const { count: reportsCount } =
          await this.emailReportsService.getNotifiedCountsInADay({
            domain: domainFromSenderId,
            sender: { $nin: configuredMails },
            user: webhooks.user.toString(),
          });
        count = reportsCount;
      } else {
        const { count: reportsCount } =
          await this.emailReportsService.getNotifiedCountsInADay({
            domain: domainFromSenderId,
            sender: senderEmail,
            user: webhooks.user.toString(),
          });
        count = reportsCount;
      }

      events.map(async (event) => {
        await this.eventsServices.create(
          this.configService.get('nse.NSE_SECRET_KEY'),
          {
            notificationTo: getNotificationsSettings?.notifyEmails,
            sender: event?.sender,
            recipient: event?.recipient,
            status: event.status.toUpperCase(),
            referenceId: event?.referenceId,
            bounceDetailLong: event?.bounceDetailLong || '',
            bounceDetailShort: event?.bounceDetailShort || '',
            error: event?.error || '',
            emailProvider: event?.emailProvider || '',
            webhookId: webhooks._id,
          },
          webhooks.user._id,
        );
      });

      if (!foundReportEntry?.result) {
        await this.emailReportsService.create(
          this.configService.get('nse.NSE_SECRET_KEY'),
          {
            notificationTo: getNotificationsSettings?.notifyEmails,
            sender: updateEventStatusData?.sender,
            recipient: updateEventStatusData?.recipient,
            status: updateEventStatusData.status.toUpperCase(),
            referenceId: updateEventStatusData?.referenceId,
            bounceDetailLong: updateEventStatusData?.bounceDetailLong || '',
            bounceDetailShort: updateEventStatusData?.bounceDetailShort || '',
            error: updateEventStatusData?.error || '',
            emailProvider: updateEventStatusData?.emailProvider || '',
          },
          webhooks.user._id,
        );

        if (!updateEventStatusData?.sender) {
          isNotificationSendValid = false;
        }
      } else {
        // if same event is triggered again avoid sending a email notification
        if (
          updateEventStatusData.status?.toUpperCase() ===
          foundReportEntry.result?.status
        ) {
          isNotificationSendValid = false;
        }
        await this.emailReportsService.update(
          foundReportEntry.result?._id?.toString(),
          {
            notificationTo: getNotificationsSettings?.notifyEmails,
            status: updateEventStatusData.status?.toUpperCase(),
            bounceDetailLong: updateEventStatusData.bounceDetailLong || '',
            bounceDetailShort: updateEventStatusData.bounceDetailShort || '',
            error: updateEventStatusData.error || '',
          },
        );

        if (
          !foundReportEntry?.result?.domain &&
          foundReportEntry?.result?.domain !== domainFromSenderId
        ) {
          isNotificationSendValid = false;
        }
      }

      if (!isNotificationSendValid) {
        return { status: 'Updated reports' };
      }

      if (!getNotificationsSettings) {
        return {
          status: 'Notifications not configured or Duplicate event triggered',
        };
      }

      const getEmailsToSendNotifications =
        getNotificationsSettings.isActive &&
        getNotificationsSettings.maxNotifications > count &&
        getNotificationsSettings.notifyEmails;

      if (
        !getEmailsToSendNotifications ||
        getEmailsToSendNotifications?.length < 1
      ) {
        return { status: 'Recipients emails not configured or limit reached' };
      }

      const typeOfEventsToBeNotified = ['FAILED', 'BOUNCE', 'DROPPED', 'SPAM'];

      const notifiableEvents = events.filter((event) =>
        typeOfEventsToBeNotified.includes(event.status.toUpperCase()),
      );
      if (notifiableEvents.length < 1) {
        return { status: 'Updated reports' };
      }

      const payload = {
        eventType: SENDMAIL_PRODUCER_EVENT_TYPE.sendNotification,
        data: {
          recipientsMail: [
            ...getEmailsToSendNotifications,
            ...((getNotificationsSettings.isNotifySender && [senderEmail]) ||
              []),
          ],
          webhookNotificationEvents: notifiableEvents,
        },
      };

      await axios.post(
        this.configService.get('sqs.SEND_EMAIL_PRODUCER_URL'),
        payload,
      );
      return { status: 'success' };
    } catch (error) {
      return { status: 'failed' };
    }
  }
}
