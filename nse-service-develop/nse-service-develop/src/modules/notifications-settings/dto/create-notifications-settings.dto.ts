import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsFQDN,
  IsNumber,
  IsOptional,
  IsString,
  ValidateIf,
} from 'class-validator';

export class CreateNotificationsSettingsDto {
  @ApiProperty({
    description: 'from domain',
  })
  @IsString()
  @IsFQDN()
  readonly domain: string;

  @ApiProperty({
    description: 'from email',
  })
  @IsString()
  @IsEmail()
  @ValidateIf((field) => field === '')
  readonly email?: string;

  @ApiProperty({
    description: 'maximum number of notifications to be sent',
  })
  @IsNumber()
  readonly maxNotifications: number;

  @ApiProperty({
    description: 'email ids to send notifications',
  })
  @IsEmail({}, { each: true })
  readonly notifyEmails: string[];

  @ApiProperty({
    description: 'notification enable or disable',
  })
  @IsBoolean()
  readonly isActive: boolean;

  @ApiProperty({
    description: 'send a notification to sender',
  })
  @IsBoolean()
  readonly isNotifySender: boolean;

  @ApiProperty({
    description: 'comments',
  })
  @IsString()
  @IsOptional()
  readonly comments?: string;
}
