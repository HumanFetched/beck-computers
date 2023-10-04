import { ProviderConfigurationDto } from './provider-configuration.dto';
import { ConnectionType } from './../types/index';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEnum,
  IsMongoId,
  IsOptional,
  IsString,
} from 'class-validator';
import { TConnectionType } from '../../../types';

export class CreateProviderDetailDto {
  @ApiProperty({
    description: 'id for the provider',
  })
  @IsString()
  @IsMongoId()
  readonly provider: string;

  @ApiProperty({
    description: 'connection type for the provider',
  })
  @IsString()
  @IsEnum(ConnectionType)
  readonly connectionType: TConnectionType;

  @ApiProperty({
    description: 'Api details type for the provider',
  })
  @IsOptional()
  readonly apiDetails?: Record<string, unknown>;

  @ApiProperty({
    description: 'SMTP details type for the provider',
  })
  @IsOptional()
  readonly smtpDetails?: Record<string, unknown>;

  @ApiProperty({
    description: 'Provider details configuration',
  })
  @IsOptional()
  readonly configuration?: ProviderConfigurationDto;

  @ApiProperty({
    description: 'group id',
  })
  @IsOptional()
  @IsMongoId()
  readonly providerGroupId?: string;

  @ApiProperty({
    description: 'Is Provider Active ?',
  })
  @IsOptional()
  @IsBoolean()
  readonly isActive?: boolean;
}
