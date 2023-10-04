import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsMongoId,
  IsOptional,
  IsString,
} from 'class-validator';
import { EmailStatusTypes } from '../../email-reports/types';

export class CreateEventDto {
  @ApiProperty({
    description: 'From email id',
  })
  @IsString()
  @IsOptional()
  readonly notificationFrom?: string;

  @ApiProperty({
    description: 'To email id',
  })
  @IsString()
  @IsOptional()
  readonly notificationTo?: string[];

  @ApiProperty({
    description: 'Error while sending email',
  })
  @IsString()
  @IsOptional()
  readonly error?: string;

  @ApiProperty({
    description: 'Group ID',
  })
  @IsString()
  @IsMongoId()
  @IsOptional()
  readonly group?: string;

  @ApiProperty({
    description: 'Provider details ID',
  })
  @IsString()
  @IsMongoId()
  @IsOptional()
  readonly providerDetails?: string;

  @ApiProperty({
    description: 'Email provider ID',
  })
  @IsString()
  @IsMongoId()
  @IsOptional()
  readonly emailProvider?: string;

  @ApiProperty({
    description: 'connection type for the provider',
  })
  @IsString()
  @IsEnum(EmailStatusTypes)
  readonly status: EmailStatusTypes;

  @ApiProperty({
    description: 'date of message sent',
  })
  @IsDate()
  @IsOptional()
  readonly notifiedAt?: Date;

  @ApiProperty({
    description: 'notification sent status',
  })
  @IsBoolean()
  @IsOptional()
  readonly isNotified?: boolean;

  @ApiProperty({
    description: 'sender email address',
  })
  @IsString()
  @IsOptional()
  readonly sender?: string;

  @ApiProperty({
    description: 'recipient email address',
  })
  @IsString()
  readonly recipient: string;

  @ApiProperty({
    description: 'bounce detail short description',
  })
  @IsString()
  @IsOptional()
  readonly bounceDetailShort?: string;

  @ApiProperty({
    description: 'bounce detail long description',
  })
  @IsString()
  @IsOptional()
  readonly bounceDetailLong?: string;

  @ApiProperty({
    description: 'reference id for the mails',
  })
  @IsString()
  @IsOptional()
  readonly referenceId?: string;

  @ApiProperty({
    description: 'subject of mail',
  })
  @IsString()
  @IsOptional()
  readonly subject?: string;

  @ApiProperty({
    description: 'unique message id',
  })
  @IsString()
  @IsOptional()
  readonly messageId?: string;

  @ApiProperty({
    description: 'Webhook id',
  })
  @IsString()
  readonly webhookId: string;
}
