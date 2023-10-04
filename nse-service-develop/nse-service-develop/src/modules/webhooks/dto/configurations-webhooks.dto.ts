import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class EventsConfigurationDto {
  @ApiProperty({
    description: 'delivered event',
  })
  @IsBoolean()
  readonly isDelivered: boolean;

  @ApiProperty({
    description: 'bounced event',
  })
  @IsBoolean()
  readonly isBounced: boolean;

  @ApiProperty({
    description: 'dropped event',
  })
  @IsBoolean()
  readonly isDropped: boolean;

  @ApiProperty({
    description: 'failed event',
  })
  @IsBoolean()
  readonly isFailed: boolean;

  @ApiProperty({
    description: 'deferred event',
  })
  @IsBoolean()
  readonly isDeferred: boolean;

  @ApiProperty({
    description: 'spam event',
  })
  @IsBoolean()
  readonly isSpammed: boolean;
}
