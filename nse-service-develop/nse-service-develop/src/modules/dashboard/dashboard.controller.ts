import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';
import { DashboardService } from './dashboard.service';
import { DurationDto } from './dto/duration.dto';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('widget/total-count')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  totalCount(@Query() durationDto: DurationDto, @Req() req: any) {
    return this.dashboardService.totalCountWidget(durationDto, req.user);
  }

  @Get('widget/hourly-mails')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  hourlyWidget(@Query() durationDto: DurationDto, @Req() req: any) {
    return this.dashboardService.hourlyMailSentWidget(durationDto, req.user);
  }

  @Get('widget/reject-type')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  rejectedType(@Query() durationDto: DurationDto, @Req() req: any) {
    return this.dashboardService.rejectedType(durationDto, req.user);
  }
}
