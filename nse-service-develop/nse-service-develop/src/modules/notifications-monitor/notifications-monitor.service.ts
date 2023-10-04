import { Injectable } from '@nestjs/common';
import { ListDto } from 'src/common-dto';
import { EventsService } from '../events/events.service';
import { User } from '../users/entities/user.entity';
import { ExportCSVDto } from './dto/exportCSV-dto';

@Injectable()
export class NotificationsMonitorService {
  constructor(private eventsService: EventsService) {}

  async notificationsList(listNotificationsListDto: ListDto, user: User) {
    return this.eventsService.findAll(listNotificationsListDto, user);
  }

  async search(searchNotificationsDto: ListDto, user: User) {
    return this.eventsService.search(searchNotificationsDto, user);
  }

  async exportCSV(exportCSVDto: ExportCSVDto, user: User) {
    return this.eventsService.exportCSV(exportCSVDto, user);
  }

  async searchExportCSV(listNotificationSettingsDto: ListDto, user: User) {
    return this.eventsService.searchExportCSV(
      listNotificationSettingsDto,
      user,
    );
  }
}
