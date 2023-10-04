import { PartialType } from '@nestjs/swagger';
import { CreateNotificationsMonitorDto } from './create-notifications-monitor.dto';

export class UpdateNotificationsMonitorDto extends PartialType(
  CreateNotificationsMonitorDto,
) {}
