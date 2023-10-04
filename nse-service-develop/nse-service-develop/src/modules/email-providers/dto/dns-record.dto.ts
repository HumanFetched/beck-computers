import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { DnsRecords } from '../types';

export class DnsRecordsDto {
  @ApiProperty({
    description: 'Type for the email provider dns record',
  })
  @IsString()
  @IsEnum(DnsRecords)
  readonly type: string;

  @ApiProperty({
    description: 'Key for the email provider dns record',
  })
  @IsString()
  readonly key: string;
}
