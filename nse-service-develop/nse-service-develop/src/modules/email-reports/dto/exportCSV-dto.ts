import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsOptional, ValidateNested } from 'class-validator';
import { ListDto } from 'src/common-dto';

export class ExportCSVDto {
  @ApiProperty({
    description: 'from date',
  })
  @IsDate()
  @IsOptional()
  @Type(() => Date)
  readonly fromDuration?: string;

  @ApiProperty({
    description: 'to date',
  })
  @IsDate()
  @IsOptional()
  @Type(() => Date)
  readonly toDuration?: string;

  @ApiProperty({
    description: 'filter by fields',
  })
  @ValidateNested({ each: true })
  @Type(() => ListDto)
  @IsOptional()
  readonly options: ListDto;
}
