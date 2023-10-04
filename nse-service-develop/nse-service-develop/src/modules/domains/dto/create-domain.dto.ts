import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsFQDN, IsOptional, IsString } from 'class-validator';

export class CreateDomainDto {
  @ApiProperty({
    description: 'Domain',
  })
  @IsFQDN()
  readonly domain: string;

  @ApiProperty({
    description: 'Status',
  })
  @IsBoolean()
  @IsOptional()
  readonly isActive?: boolean;

  @ApiProperty({
    description: 'Comments',
  })
  @IsString()
  @IsOptional()
  readonly comments?: string;
}
