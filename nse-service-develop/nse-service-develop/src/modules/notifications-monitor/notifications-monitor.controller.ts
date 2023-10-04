import {
  Controller,
  Get,
  UseGuards,
  Req,
  Query,
  Body,
  Post,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ListDto } from 'src/common-dto';
import { ExportCSVDto } from './dto/exportCSV-dto';
import { NotificationsMonitorService } from './notifications-monitor.service';

@Controller('notifications-monitor')
export class NotificationsMonitorController {
  constructor(
    private readonly notificationsMonitorService: NotificationsMonitorService,
  ) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  findAll(@Query() listNotificationsListDto: ListDto, @Req() req: any) {
    return this.notificationsMonitorService.notificationsList(
      listNotificationsListDto,
      req.user,
    );
  }

  @Get('search')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  search(@Query() searchNotificationsSettingsDto: ListDto, @Req() req: any) {
    return this.notificationsMonitorService.search(
      searchNotificationsSettingsDto,
      req.user,
    );
  }

  @Post('export-csv')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  exportCSV(@Body() exportCSVDto: ExportCSVDto, @Req() req: any) {
    return this.notificationsMonitorService.exportCSV(exportCSVDto, req.user);
  }

  @Get('search-export-csv')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  searchExport(
    @Query() searchExportNotificationSettingsDto: ListDto,
    @Req() req: any,
  ) {
    return this.notificationsMonitorService.searchExportCSV(
      searchExportNotificationSettingsDto,
      req.user,
    );
  }
}
