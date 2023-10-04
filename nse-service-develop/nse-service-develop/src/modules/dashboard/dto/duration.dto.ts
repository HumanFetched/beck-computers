import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsOptional } from 'class-validator';

export class DurationDto {
  @ApiProperty({
    description: 'from date',
  })
  @IsDate()
  @IsOptional()
  @Type(() => Date)
  readonly fromDuration: string;

  @ApiProperty({
    description: 'to date',
  })
  @IsDate()
  @IsOptional()
  @Type(() => Date)
  readonly toDuration: string;
}
