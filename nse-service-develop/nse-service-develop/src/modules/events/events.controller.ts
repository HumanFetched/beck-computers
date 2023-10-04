import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Headers,
  UseGuards,
  Req,
  Query,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ListDto } from 'src/common-dto';
import { Types } from 'mongoose';
import { ApiBearerAuth, ApiHeader } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { ExportCSVDto } from './dto/exportCSV-dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  @ApiHeader({
    name: 'x-api-key',
    description: 'Custom header',
  })
  create(
    @Body() createEventDto: CreateEventDto,
    userId: Types.ObjectId,
    @Headers() headers: { 'x-api-key': string },
  ) {
    return this.eventsService.create(
      headers['x-api-key'],
      createEventDto,
      userId,
    );
  }

  @Get('search')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  search(@Query() searchEventsDto: ListDto, @Req() req: any) {
    return this.eventsService.search(searchEventsDto, req.user);
  }

  @Get('search-export-csv')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  searchExport(@Query() searchExportEventsDto: ListDto, @Req() req: any) {
    return this.eventsService.searchExportCSV(searchExportEventsDto, req.user);
  }

  @Post('export-csv')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  exportCSV(@Body() exportCSVDto: ExportCSVDto, @Req() req: any) {
    return this.eventsService.exportCSV(exportCSVDto, req.user);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  findAll(@Query() listEventsDto: ListDto, @Req() req: any) {
    return this.eventsService.findAll(listEventsDto, req.user);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  findOne(@Param('id') _id: string, @Query('fields') fields: string) {
    return this.eventsService.findOne({ _id, fields });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventsService.update(id, updateEventDto);
  }
}
