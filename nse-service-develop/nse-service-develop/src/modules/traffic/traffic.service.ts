import { Injectable } from '@nestjs/common';
import moment from 'moment';
import { EmailReportsService } from '../email-reports/email-reports.service';
import { User } from '../users/entities/user.entity';
import { ListTrafficDto } from './dto/list-traffic.dto';

@Injectable()
export class TrafficService {
  constructor(private readonly emailReportsService: EmailReportsService) {}
  trafficCounts(listTrafficDto: ListTrafficDto, user: User) {
    return this.emailReportsService.trafficCounts(listTrafficDto, user);
  }
}
