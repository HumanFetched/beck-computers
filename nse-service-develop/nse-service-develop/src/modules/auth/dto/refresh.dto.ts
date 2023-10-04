import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class RefreshDto {
  @ApiProperty({ type: String, description: 'JWT refresh token' })
  @IsNotEmpty()
  refreshToken: string;
}
