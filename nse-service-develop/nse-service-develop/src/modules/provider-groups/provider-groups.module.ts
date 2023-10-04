import { Module, forwardRef } from '@nestjs/common';
import { ProviderGroupsService } from './provider-groups.service';
import { ProviderGroupsController } from './provider-groups.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ProviderGroup,
  ProviderGroupSchema,
} from './entities/provider-group.entity';
import MongoPaging from 'mongoose-paginate-v2';
import { ProviderDetailsModule } from '../provider-details/provider-details.module';
import { DomainsModule } from '../domains/domains.module';
import {
  ProviderDetail,
  ProviderDetailSchema,
} from '../provider-details/entities/provider-detail.entity';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: ProviderGroup.name,
        useFactory: () => {
          const schema = ProviderGroupSchema;
          schema.plugin(MongoPaging);
          return schema;
        },
      },
    ]),
    forwardRef(() => ProviderDetailsModule),
    forwardRef(() => DomainsModule),
    MongooseModule.forFeature([
      {
        name: ProviderDetail.name,
        schema: ProviderDetailSchema,
      },
    ]),
  ],
  controllers: [ProviderGroupsController],
  providers: [ProviderGroupsService],
  exports: [ProviderGroupsService],
})
export class ProviderGroupsModule {}
