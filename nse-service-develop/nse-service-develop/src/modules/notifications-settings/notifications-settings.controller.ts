import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  Query,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ListDto } from 'src/common-dto';
import { CreateNotificationsSettingsDto } from './dto/create-notifications-settings.dto';
import { UpdateNotificationsSettingsDto } from './dto/update-notifications-settings.dto';
import { NotificationsSettingsService } from './notifications-settings.service';

@Controller('notifications-settings')
@ApiTags('Notifications settings')
export class NotificationsSettingsController {
  constructor(
    private readonly notificationSettingsService: NotificationsSettingsService,
  ) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  create(
    @Body() createNotificationsSettingsDto: CreateNotificationsSettingsDto,
    @Req() req: any,
  ) {
    return this.notificationSettingsService.create(
      createNotificationsSettingsDto,
      req.user,
    );
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  findAll(@Query() listNotificationDto: ListDto, @Req() req: any) {
    return this.notificationSettingsService.findAll(
      listNotificationDto,
      req.user,
    );
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  update(
    @Param('id') id: string,
    @Body() updateNotificationsSettingsDto: UpdateNotificationsSettingsDto,
    @Req() req: any,
  ) {
    return this.notificationSettingsService.update(
      id,
      updateNotificationsSettingsDto,
      req.user,
    );
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  remove(@Param('id') id: string, @Req() req: any) {
    return this.notificationSettingsService.remove(id, req.user);
  }
}
