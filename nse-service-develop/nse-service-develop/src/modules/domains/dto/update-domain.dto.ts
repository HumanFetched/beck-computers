import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateDomainDto } from './create-domain.dto';

export class UpdateDomainDto extends OmitType(PartialType(CreateDomainDto), [
  'domain',
]) {}
