import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class SmtpDetailsDto {
  @ApiProperty({
    description: 'username for the provider smtp',
  })
  @IsString()
  readonly username: string;

  @ApiProperty({
    description: 'password for the provider smtp',
  })
  @IsString()
  readonly password: string;

  @ApiProperty({
    description: 'host for the provider smtp',
  })
  @IsString()
  readonly host: string;

  @ApiProperty({
    description: 'host for the provider smtp',
  })
  @IsNumber()
  readonly port: number;
}
