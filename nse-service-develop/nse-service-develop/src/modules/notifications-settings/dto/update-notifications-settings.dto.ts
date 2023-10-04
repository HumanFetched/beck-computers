import { PartialType } from '@nestjs/swagger';
import { CreateNotificationsSettingsDto } from './create-notifications-settings.dto';

export class UpdateNotificationsSettingsDto extends PartialType(
  CreateNotificationsSettingsDto,
) {}
