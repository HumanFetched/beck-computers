import { Module } from '@nestjs/common';
import { WebhooksService } from './webhooks.service';
import { WebhooksController } from './webhooks.controller';
import MongoPaging from 'mongoose-paginate-v2';
import { Webhooks, WebhooksSchema } from './entities/webhooks.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { EmailReportsModule } from '../email-reports/email-reports.module';
import { ConfigModule } from '@nestjs/config';
import { NotificationsSettingsModule } from '../notifications-settings/notifications-settings.module';
import { EmailProvidersModule } from '../email-providers/email-providers.module';
import { EventsModule } from '../events/events.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Webhooks.name,
        useFactory: () => {
          const schema = WebhooksSchema;
          schema.plugin(MongoPaging);
          return schema;
        },
      },
    ]),
    EmailReportsModule,
    NotificationsSettingsModule,
    ConfigModule,
    EmailProvidersModule,
    EventsModule,
  ],
  controllers: [WebhooksController],
  providers: [WebhooksService],
  exports: [WebhooksService],
})
export class WebhooksModule {}
