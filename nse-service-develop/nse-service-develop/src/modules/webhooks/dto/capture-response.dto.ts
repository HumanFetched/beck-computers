import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';

export class CaptureResponseDto {
  @ApiProperty({
    description: 'look for reports after the this timestamp',
  })
  @IsDate()
  @Type(() => Date)
  captureTime?: string;

  @ApiProperty({
    description: 'webhook id',
  })
  @IsString()
  webhookId?: string;
}
