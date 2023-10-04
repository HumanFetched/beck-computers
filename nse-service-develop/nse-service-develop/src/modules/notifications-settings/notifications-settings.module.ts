import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import MongoPaging from 'mongoose-paginate-v2';
import {
  NotificationsSettings,
  NotificationsSettingsSchema,
} from './entities/notifications-settings.entity';
import { NotificationsSettingsController } from './notifications-settings.controller';
import { NotificationsSettingsService } from './notifications-settings.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: NotificationsSettings.name,
        useFactory: () => {
          const schema = NotificationsSettingsSchema;
          schema.plugin(MongoPaging);
          return schema;
        },
      },
    ]),
  ],
  controllers: [NotificationsSettingsController],
  providers: [NotificationsSettingsService],
  exports: [NotificationsSettingsService],
})
export class NotificationsSettingsModule {}
