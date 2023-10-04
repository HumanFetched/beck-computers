import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CloudStorageTypes } from '../types';
import { GoogleDriveDto } from './google-drive.dto';

export class CreateCloudStorageDto {
  @ApiProperty({
    description: 'name',
  })
  @IsString()
  @IsOptional()
  readonly name: string;

  @ApiProperty({
    description: 'email of account logged in',
  })
  @IsString()
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    description: 'name of cloud storage',
  })
  @IsString()
  @IsEnum(CloudStorageTypes)
  readonly cloudStorageName: CloudStorageTypes;

  @ApiProperty({
    description: 'data fields for cloud drive',
  })
  @ValidateNested({ each: true })
  @Type(() => GoogleDriveDto)
  readonly data: GoogleDriveDto;

  @ApiProperty({
    description: 'activate status',
  })
  @IsBoolean()
  @IsOptional()
  readonly isActive: boolean;
}
