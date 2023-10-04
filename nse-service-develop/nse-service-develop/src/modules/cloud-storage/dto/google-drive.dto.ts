import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class GoogleDriveDto {
  @ApiProperty({
    description: 'Google drive refresh token',
  })
  @IsString()
  readonly refreshToken: string;
}
