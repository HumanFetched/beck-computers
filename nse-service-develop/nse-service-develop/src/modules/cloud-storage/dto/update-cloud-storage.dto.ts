import { PartialType } from '@nestjs/swagger';
import { CreateCloudStorageDto } from './create-cloud-storage.dto';

export class UpdateCloudStorageDto extends PartialType(CreateCloudStorageDto) {}
