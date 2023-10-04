import { forwardRef, Module } from '@nestjs/common';
import { ProviderDetailsService } from './provider-details.service';
import { ProviderDetailsController } from './provider-details.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ProviderDetail,
  ProviderDetailSchema,
} from './entities/provider-detail.entity';
import MongoPaging from 'mongoose-paginate-v2';
import { ProviderGroupsModule } from '../provider-groups/provider-groups.module';
import { EmailProvidersModule } from '../email-providers/email-providers.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: ProviderDetail.name,
        useFactory: () => {
          const schema = ProviderDetailSchema;
          schema.plugin(MongoPaging);
          return schema;
        },
      },
    ]),
    forwardRef(() => ProviderGroupsModule),
    EmailProvidersModule,
  ],
  controllers: [ProviderDetailsController],
  providers: [ProviderDetailsService],
  exports: [ProviderDetailsService],
})
export class ProviderDetailsModule {}
