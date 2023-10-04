import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class FindOneDto {
  @ApiProperty({
    description: 'Fields of the documents',
  })
  @IsOptional()
  @IsString()
  fields?: string;

  @ApiProperty({
    description: 'ID of the documents',
  })
  @IsString()
  _id: string;
}
