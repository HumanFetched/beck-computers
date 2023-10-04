import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cron } from '@nestjs/schedule';
import axios from 'axios';
import { CloudStorageService } from 'src/modules/cloud-storage/cloud-storage.service';
import { SENDMAIL_PRODUCER_EVENT_TYPE } from 'src/utils/constants';

@Injectable()
export class SchedulesService {
  constructor(
    private cloudStorageService: CloudStorageService,
    private configService: ConfigService,
  ) {}

  @Cron('5 0 0 * * *', {
    name: 'Auto reports export to cloud',
  })
  async handleCron() {
    const getAllScheduledExports =
      await this.cloudStorageService.findAllScheduledExports();

    const currentTimeStamp = new Date();
    currentTimeStamp.setDate(currentTimeStamp.getDate() - 1);
    const fromDuration = new Date(currentTimeStamp.setHours(0, 0, 0, 0)); // yesterday 12AM
    const toDuration = new Date(currentTimeStamp.setHours(23, 59, 59, 59)); // yesterday 11:59PM

    const autoExports = getAllScheduledExports.map(async (cloudStorageData) => {
      const payload = {
        eventType: SENDMAIL_PRODUCER_EVENT_TYPE.exportReportsToCloudStorage,
        data: {
          cloudStorageId: cloudStorageData._id.toString(),
          fromDuration,
          toDuration,
        },
      };

      return await axios.post(
        this.configService.get('sqs.SEND_EMAIL_PRODUCER_URL'),
        payload,
      );
    });
    await Promise.all(autoExports);
  }
}
