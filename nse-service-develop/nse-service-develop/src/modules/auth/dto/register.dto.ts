import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsMongoId,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';

class CaptchaDto {
  @ApiProperty({
    description: 'Captcha id',
  })
  @IsMongoId()
  readonly captcha_id: string;

  @ApiProperty({
    description: 'Captcha answer',
  })
  @IsString()
  readonly captcha_ans: string;
}

export class RegisterDto {
  @ApiProperty({
    description: 'Captcha',
  })
  @Type(() => CaptchaDto)
  @ValidateNested({ each: true })
  readonly captcha: CaptchaDto;

  @ApiProperty({
    description: 'Email address',
  })
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    description: 'Password',
  })
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
