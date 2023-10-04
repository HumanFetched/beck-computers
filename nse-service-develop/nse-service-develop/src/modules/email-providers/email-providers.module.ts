import { Module } from '@nestjs/common';
import { EmailProvidersService } from './email-providers.service';
import { EmailProvidersController } from './email-providers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  EmailProvider,
  EmailProviderSchema,
} from './entities/email-provider.entity';
import MongoPaging from 'mongoose-paginate-v2';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: EmailProvider.name,
        useFactory: () => {
          const schema = EmailProviderSchema;
          schema.plugin(MongoPaging);
          return schema;
        },
      },
    ]),
  ],
  controllers: [EmailProvidersController],
  providers: [EmailProvidersService],
  exports: [EmailProvidersService],
})
export class EmailProvidersModule {}
