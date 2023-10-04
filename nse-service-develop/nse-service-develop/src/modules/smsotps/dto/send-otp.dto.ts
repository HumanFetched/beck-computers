import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, IsNotEmpty } from 'class-validator';

export class SendOtpDto {
  @ApiProperty({ type: String, description: 'Dial code of country' })
  @IsNotEmpty()
  dialCode: string;

  @ApiProperty({ type: String, description: 'Phone number without dial code' })
  @IsNotEmpty()
  @IsNumberString()
  phoneNumber: string;
}
