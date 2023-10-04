import { ProviderDetailsModule } from '../provider-details/provider-details.module';
import { Module } from '@nestjs/common';
import { EmailReportsService } from './email-reports.service';
import { EmailReportsController } from './email-reports.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  EmailReports,
  EmailReportsSchema,
} from './entities/email-report.entity';
import MongoPaging from 'mongoose-paginate-v2';
import { ProviderGroupsModule } from '../provider-groups/provider-groups.module';
import { ApiKeysModule } from '../api-keys/api-keys.module';
import { ConfigModule } from '@nestjs/config';
import { CloudStorageModule } from '../cloud-storage/cloud-storage.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: EmailReports.name,
        useFactory: () => {
          const schema = EmailReportsSchema;
          schema.plugin(MongoPaging);
          return schema;
        },
      },
    ]),
    ProviderGroupsModule,
    ApiKeysModule,
    ConfigModule,
    CloudStorageModule,
  ],
  controllers: [EmailReportsController],
  providers: [EmailReportsService],
  exports: [EmailReportsService],
})
export class EmailReportsModule {}
