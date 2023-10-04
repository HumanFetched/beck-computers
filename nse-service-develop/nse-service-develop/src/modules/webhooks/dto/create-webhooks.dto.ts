import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsMongoId, IsOptional, IsString } from 'class-validator';
import { EventsConfigurationDto } from './configurations-webhooks.dto';

export class CreateWebhooksDto {
  @ApiProperty({
    description: 'Name for the webhook',
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: 'account id',
  })
  @IsString()
  @IsOptional()
  readonly accountId?: string;

  @ApiProperty({
    description: 'Description for the webhook',
  })
  @IsString()
  readonly description: string;

  @ApiProperty({
    description: 'Status of webhook',
  })
  @IsBoolean()
  @IsOptional()
  readonly isActive: boolean;

  @ApiProperty({
    description: 'Provider binding with this webhook.',
  })
  @IsString()
  @IsMongoId()
  readonly provider: string;

  @ApiProperty({
    description: 'Event configurations',
  })
  @IsOptional()
  readonly configurations?: EventsConfigurationDto;
}
