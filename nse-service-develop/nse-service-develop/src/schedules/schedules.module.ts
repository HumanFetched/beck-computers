import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CloudStorageModule } from 'src/modules/cloud-storage/cloud-storage.module';
import { SchedulesService } from './schedules.service';

@Module({
  imports: [CloudStorageModule, ConfigModule],
  providers: [SchedulesService],
})
export class SchedulesModule {}
