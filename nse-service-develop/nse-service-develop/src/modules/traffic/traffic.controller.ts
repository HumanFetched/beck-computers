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
import { TrafficService } from './traffic.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ListTrafficDto } from './dto/list-traffic.dto';

@Controller('traffic')
export class TrafficController {
  constructor(private readonly trafficService: TrafficService) {}

  @Get('deliverability')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  trafficCounts(@Query() listTrafficDto: ListTrafficDto, @Req() req: any) {
    return this.trafficService.trafficCounts(listTrafficDto, req.user);
  }
}
