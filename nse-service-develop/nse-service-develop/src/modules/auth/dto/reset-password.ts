import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ResetPasswordDto {
  @ApiProperty({ type: String, description: 'Email Address' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({ type: String, description: 'Reset code' })
  @IsNotEmpty()
  code: string;

  @ApiProperty({ type: String, description: 'New password' })
  @IsNotEmpty()
  password: string;
}
