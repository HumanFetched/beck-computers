import { PartialType, PickType } from '@nestjs/swagger';
import { CreateEmailReportDto } from './create-email-report.dto';

export class UpdateEmailReportDto extends PickType(
  PartialType(CreateEmailReportDto),
  [
    'bounceDetailLong',
    'bounceDetailShort',
    'status',
    'error',
    'notificationTo',
  ],
) {}
