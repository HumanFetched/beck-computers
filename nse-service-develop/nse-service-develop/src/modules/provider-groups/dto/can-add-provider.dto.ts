import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId } from 'class-validator';

export class CanAddProviderDto {
  @ApiProperty({
    description: 'provider for the group',
  })
  @IsMongoId()
  readonly provider: string;

  @ApiProperty({
    description: 'group id',
  })
  @IsMongoId()
  readonly providerGroupId: string;
}
