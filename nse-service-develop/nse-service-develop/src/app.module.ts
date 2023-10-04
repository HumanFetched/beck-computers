import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/configuration';
import { AuthConfig } from './modules/auth/auth.config';
import { AuthModule } from './modules/auth/auth.module';
import { JwtStrategy } from './modules/auth/jwt.strategy';
import { UsersModule } from './modules/users/users.module';
import { SnsModule } from './sns/sns.module';
import { SendSmsModule } from './modules/smsotps/smsotps.module';
import { DomainsModule } from './modules/domains/domains.module';
import { ProviderGroupsModule } from './modules/provider-groups/provider-groups.module';
import { EmailProvidersModule } from './modules/email-providers/email-providers.module';
import { ProviderDetailsModule } from './modules/provider-details/provider-details.module';
import { ApiKeysModule } from './modules/api-keys/api-keys.module';
import { DeliveryModule } from './modules/delivery/delivery.module';
import { EmailReportsModule } from './modules/email-reports/email-reports.module';
import { WebhooksModule } from './modules/webhooks/webhooks.module';
import { NotificationsSettingsModule } from './modules/notifications-settings/notifications-settings.module';
import { CloudStorageModule } from './modules/cloud-storage/cloud-storage.module';
import { HealthModule } from './modules/health/health.module';
import { ScheduleModule } from '@nestjs/schedule';
import { SchedulesModule } from './schedules/schedules.module';
import { NotificationsMonitorModule } from './modules/notifications-monitor/notifications-monitor.module';
import { TrafficModule } from './modules/traffic/traffic.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { EventsModule } from './modules/events/events.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
      load: [configuration],
    }),
   
    MongooseModule.forRoot(
      process.env.MONGODB_URL
    ),
    SnsModule.forRoot(process.env.AWS_REGION, {
      secretAccessKey: process.env.AWS_SECRET_KEY,
      accessKeyId: process.env.AWS_ACCESS_KEY,
    }),
    ScheduleModule.forRoot(),
    AuthModule,
    UsersModule,
    SendSmsModule,
    DomainsModule,
    ProviderGroupsModule,
    EmailProvidersModule,
    ProviderDetailsModule,
    ApiKeysModule,
    DeliveryModule,
    EmailReportsModule,
    WebhooksModule,
    NotificationsSettingsModule,
    CloudStorageModule,
    HealthModule,
    SchedulesModule,
    NotificationsMonitorModule,
    TrafficModule,
    DashboardModule,
    EventsModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthConfig, JwtStrategy],
})
export class AppModule {}
