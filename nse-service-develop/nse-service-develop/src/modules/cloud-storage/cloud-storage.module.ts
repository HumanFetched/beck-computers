import { Module } from '@nestjs/common';
import { CloudStorageService } from './cloud-storage.service';
import { CloudStorageController } from './cloud-storage.controller';
import {
  CloudStorage,
  CloudStorageSchema,
} from './entities/cloud-storage.entity';
import { MongooseModule } from '@nestjs/mongoose';
import MongoPaging from 'mongoose-paginate-v2';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: CloudStorage.name,
        useFactory: () => {
          const schema = CloudStorageSchema;
          schema.plugin(MongoPaging);
          return schema;
        },
      },
    ]),
  ],
  controllers: [CloudStorageController],
  providers: [CloudStorageService],
  exports: [CloudStorageService],
})
export class CloudStorageModule {}
