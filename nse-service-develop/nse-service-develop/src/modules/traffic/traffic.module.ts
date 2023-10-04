import { Module } from '@nestjs/common';
import { TrafficService } from './traffic.service';
import { TrafficController } from './traffic.controller';
import { EmailReportsModule } from '../email-reports/email-reports.module';

@Module({
  imports: [EmailReportsModule],
  controllers: [TrafficController],
  providers: [TrafficService],
})
export class TrafficModule {}
