import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class AttachmentDto {
  @ApiProperty({
    description: 'Filename',
  })
  @IsString()
  readonly filename: string;

  @ApiProperty({
    description: 'Base64 image',
  })
  @IsUrl()
  @IsString()
  readonly url: string;

  @ApiProperty({
    description: 'content Type',
  })
  @IsString()
  @IsOptional()
  readonly contentType: string;
}
export class SendEmailDto {
  @ApiProperty({
    description: 'From email address',
  })
  @IsNotEmpty()
  @IsEmail()
  readonly from: string;

  @ApiProperty({
    description: 'To email address',
  })
  @IsNotEmpty()
  @IsEmail()
  readonly to: string;

  @ApiProperty({
    description: 'Email subject',
  })
  @IsString()
  @IsNotEmpty()
  readonly subject: string;

  @ApiProperty({
    description: 'Email body (HTML)',
  })
  @IsString()
  @IsOptional()
  readonly html: string;

  @ApiProperty({
    description: 'Email body (text)',
  })
  @IsString()
  @IsOptional()
  readonly text: string;

  @ApiProperty({
    description: 'Email attachments',
  })
  @ValidateNested({ each: true })
  @Type(() => AttachmentDto)
  @IsOptional()
  readonly attachments?: AttachmentDto[];
}
