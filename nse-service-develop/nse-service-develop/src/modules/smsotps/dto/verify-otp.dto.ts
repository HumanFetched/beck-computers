import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, IsNotEmpty, IsString } from 'class-validator';

export class VerifyOtpDto {
  @ApiProperty({ type: String, description: 'Dial code of country' })
  @IsNotEmpty()
  dialCode: string;

  @ApiProperty({ type: String, description: 'Phone number without dial code' })
  @IsNotEmpty()
  @IsNumberString()
  phoneNumber: string;

  @ApiProperty({ type: String, description: 'One time password' })
  @IsNotEmpty()
  @IsString()
  otp: string;
}
