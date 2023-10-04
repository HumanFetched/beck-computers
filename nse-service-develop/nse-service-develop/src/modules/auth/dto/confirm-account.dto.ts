import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ConfirmAccountDto {
  @ApiProperty({ type: String, description: 'Email address' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({ type: String, description: 'Verification code' })
  @IsNotEmpty()
  code: string;
}
