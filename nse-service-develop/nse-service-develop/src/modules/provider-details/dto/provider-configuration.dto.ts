import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class ProviderConfigurationDto {
  @ApiProperty({
    description: 'Number of mails per month',
  })
  @IsNumber()
  readonly mailLimit: number;
}
