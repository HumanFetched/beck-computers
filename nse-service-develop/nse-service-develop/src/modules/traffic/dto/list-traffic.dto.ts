import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate } from 'class-validator';

export class ListTrafficDto {
  @ApiProperty({
    description: 'from date',
  })
  @IsDate()
  @Type(() => Date)
  readonly fromDuration: string;

  @ApiProperty({
    description: 'to date',
  })
  @IsDate()
  @Type(() => Date)
  readonly toDuration: string;
}
