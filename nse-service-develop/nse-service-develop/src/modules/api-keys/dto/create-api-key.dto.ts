import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsMongoId, IsOptional, IsString } from 'class-validator';

export class CreateApiKeyDto {
  @ApiProperty({
    description: 'API key name',
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: 'API key description',
  })
  @IsString()
  @IsOptional()
  readonly description: string;

  @ApiProperty({
    description: 'API key',
  })
  @IsBoolean()
  @IsOptional()
  readonly isActive: boolean;

  // @ApiProperty({
  //   description: 'provider group for the Api Key',
  // })
  // @IsMongoId()
  // @IsString()
  // readonly providerGroup: string;
}
