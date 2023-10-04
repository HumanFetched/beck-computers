import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ResendCodeDto {
  @ApiProperty({ type: String, description: 'Email address' })
  @IsNotEmpty()
  email: string;
}
