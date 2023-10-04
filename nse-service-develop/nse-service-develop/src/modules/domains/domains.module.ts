import { UsersModule } from './../users/users.module';
import { Domain, DomainSchema } from './entities/domain.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Module, forwardRef } from '@nestjs/common';
import { DomainsService } from './domains.service';
import { DomainsController } from './domains.controller';
import MongoPaging from 'mongoose-paginate-v2';
import { ProviderGroupsModule } from '../provider-groups/provider-groups.module';
import {
  ProviderGroup,
  ProviderGroupSchema,
} from '../provider-groups/entities/provider-group.entity';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Domain.name,
        useFactory: () => {
          const schema = DomainSchema;
          schema.plugin(MongoPaging);
          return schema;
        },
      },
    ]),
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
    UsersModule,
    forwardRef(() => ProviderGroupsModule),
  ],
  controllers: [DomainsController],
  providers: [DomainsService],
  exports: [DomainsService],
})
export class DomainsModule {}
