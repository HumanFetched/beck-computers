import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ConnectionType } from '../../provider-details/types';
import { DnsRecordsDto } from './dns-record.dto';

export class CreateEmailProviderDto {
  @ApiProperty({
    description: 'Name for the email provider',
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: 'Display name for the email provider',
  })
  @IsString()
  @IsOptional()
  readonly displayName: string;

  @ApiProperty({
    description: 'Records for the email provider',
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DnsRecordsDto)
  readonly records: DnsRecordsDto[];

  @ApiProperty({
    description: 'API Schema for email provider',
  })
  @IsArray()
  @IsOptional()
  readonly apiSchema?: Record<string, unknown>[];

  @ApiProperty({
    description: 'SMTP Schema for email provider',
  })
  @IsArray()
  @IsOptional()
  readonly smtpSchema?: Record<string, unknown>[];

  @ApiProperty({
    description: 'SMTP Schema for email provider',
  })
  @IsArray()
  @IsOptional()
  @IsEnum(ConnectionType, { each: true })
  readonly supports?: string[];
}
