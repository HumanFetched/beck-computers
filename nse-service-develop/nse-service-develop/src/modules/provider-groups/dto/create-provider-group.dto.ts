import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateProviderGroupDto {
  @ApiProperty({
    description: 'name for the group',
  })
  @IsString()
  @IsOptional()
  readonly name: string;

  @ApiProperty({
    description: 'domain for the group',
  })
  @IsOptional({ each: true })
  @IsArray()
  readonly domain?: ObjectId[];

  @ApiProperty({
    description: 'providers for the group',
  })
  @IsOptional({ each: true })
  @IsArray()
  readonly providers?: ObjectId[];
}
