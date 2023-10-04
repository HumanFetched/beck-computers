import { Module } from '@nestjs/common';
import { NotificationsMonitorService } from './notifications-monitor.service';
import { NotificationsMonitorController } from './notifications-monitor.controller';
import { EventsModule } from '../events/events.module';

@Module({
  imports: [EventsModule],
  controllers: [NotificationsMonitorController],
  providers: [NotificationsMonitorService],
})
export class NotificationsMonitorModule {}
