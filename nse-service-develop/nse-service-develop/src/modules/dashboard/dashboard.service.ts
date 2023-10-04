import { Injectable } from '@nestjs/common';
import { EmailReportsService } from '../email-reports/email-reports.service';
import { User } from '../users/entities/user.entity';
import { DurationDto } from './dto/duration.dto';

@Injectable()
export class DashboardService {
  constructor(private emailReportsService: EmailReportsService) {}

  totalCountWidget(durationDto: DurationDto, user: User) {
    return this.emailReportsService.totalCountWidget(durationDto, user);
  }

  hourlyMailSentWidget(durationDto: DurationDto, user: User) {
    return this.emailReportsService.hourlyMailSentWidget(durationDto, user);
  }

  rejectedType(durationDto: DurationDto, user: User) {
    return this.emailReportsService.rejectedTypeWidget(durationDto, user);
  }
}
