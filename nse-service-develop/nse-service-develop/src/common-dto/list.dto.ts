import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsOptional, IsString } from 'class-validator';

export class ListDto {
  @ApiProperty({
    description: 'Page number',
  })
  @IsOptional()
  @IsString()
  page: number;

  @ApiProperty({
    description: 'Limit number of data returned',
  })
  @IsString()
  @IsOptional()
  limit: number;

  @IsOptional()
  filter: string | Record<string, unknown>;

  @IsOptional()
  q?: string;

  @IsOptional()
  @IsString()
  fields?: string;

  @IsOptional()
  @IsString()
  sort?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  fromDuration?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  toDuration?: string;
}
