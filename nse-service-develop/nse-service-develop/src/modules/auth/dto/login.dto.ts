import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  @ApiProperty({ type: String, description: 'Email address' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({ type: String, description: 'Password' })
  @IsNotEmpty()
  password: string;
}
