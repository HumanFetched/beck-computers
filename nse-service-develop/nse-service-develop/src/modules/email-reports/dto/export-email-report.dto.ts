import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsString } from 'class-validator';
import { CloudStorageTypes } from 'src/modules/cloud-storage/types';

export class ExportEmailReportDto {
  @ApiProperty({
    description: 'export from drive',
  })
  @IsString()
  @IsEnum(CloudStorageTypes)
  readonly cloudPlatform: CloudStorageTypes;

  @ApiProperty({
    description: 'date of message sent',
  })
  @IsDate()
  @Type(() => Date)
  readonly fromDuration: Date;

  @ApiProperty({
    description: 'date of message sent',
  })
  @IsDate()
  @Type(() => Date)
  readonly toDuration: Date;
}
