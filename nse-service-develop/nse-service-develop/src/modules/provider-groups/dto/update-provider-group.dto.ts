import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { IsMongoId, IsString } from 'class-validator';
import { CreateProviderGroupDto } from './create-provider-group.dto';

export class UpdateProviderGroupDto extends OmitType(
  PartialType(CreateProviderGroupDto),
  ['domain'],
) {}

export class AddProvidersDto {
  @ApiProperty({
    description: 'providers for the group',
  })
  @IsMongoId()
  readonly provider: string;
}

export class RemoveProviderDto {
  @ApiProperty({
    description: 'providers for the group',
  })
  @IsMongoId()
  readonly provider: string;
}

export class AddDomainDto {
  @ApiProperty({
    description: 'Domain id',
  })
  @IsString()
  readonly domain: string;
}

export class RemoveDomainDto {
  @ApiProperty({
    description: 'Domain id',
  })
  @IsString()
  readonly domain: string;
}
