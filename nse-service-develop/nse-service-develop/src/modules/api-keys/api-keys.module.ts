import { Module } from '@nestjs/common';
import { ApiKeysService } from './api-keys.service';
import { ApiKeysController } from './api-keys.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiKey, ApiKeySchema } from './entities/api-key.entity';
import MongoPaging from 'mongoose-paginate-v2';
@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: ApiKey.name,
        useFactory: () => {
          const schema = ApiKeySchema;
          schema.plugin(MongoPaging);
          return schema;
        },
      },
    ]),
  ],
  controllers: [ApiKeysController],
  providers: [ApiKeysService],
  exports: [ApiKeysService],
})
export class ApiKeysModule {}
