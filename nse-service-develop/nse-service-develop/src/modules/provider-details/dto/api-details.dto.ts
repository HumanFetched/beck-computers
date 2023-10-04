import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class ApiDetailssDto {
  @ApiProperty({
    description: 'api key for the provider api',
  })
  @IsString()
  readonly apiKey: string;

  @ApiProperty({
    description: 'display name for the provider api',
  })
  @IsString()
  @IsOptional()
  readonly displayName?: string;
}
