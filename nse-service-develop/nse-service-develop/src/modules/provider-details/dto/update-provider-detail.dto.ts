import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateProviderDetailDto } from './create-provider-detail.dto';

export class UpdateProviderDetailDto extends OmitType(
  PartialType(CreateProviderDetailDto),
  ['provider'],
) {}
