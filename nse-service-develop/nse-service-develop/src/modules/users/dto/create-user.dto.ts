import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ type: String, description: 'Email address' })
  @IsNotEmpty()
  email: string;
}
