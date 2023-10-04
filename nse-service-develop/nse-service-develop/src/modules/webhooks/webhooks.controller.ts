import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  Req,
} from '@nestjs/common';
import { WebhooksService } from './webhooks.service';
import { CreateWebhooksDto } from './dto/create-webhooks.dto';
import { UpdateWebhooksDto } from './dto/update-webhooks.dto';
import { ListDto } from 'src/common-dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';
import { CaptureResponseDto } from './dto/capture-response.dto';

@Controller('webhooks')
export class WebhooksController {
  constructor(private readonly webhooksService: WebhooksService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  create(@Body() createWebhooksDto: CreateWebhooksDto, @Req() req: any) {
    return this.webhooksService.create(createWebhooksDto, req.user);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  findAll(@Query() listWebhooksDto: ListDto, @Req() req: any) {
    return this.webhooksService.findAll(listWebhooksDto, req.user);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  update(
    @Param('id') id: string,
    @Body() updateWebhooksDto: UpdateWebhooksDto,
    @Req() req: any,
  ) {
    return this.webhooksService.update(id, updateWebhooksDto, req.user);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  remove(@Param('id') id: string, @Req() req: any) {
    return this.webhooksService.remove(id, req.user);
  }

  @Post(':id')
  listenToEvents(@Param('id') id: string, @Body() body: any) {
    return this.webhooksService.listenToEvents(id, body);
  }

  @Get('capture-response')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  CaptureResponseDto(
    @Query() captureResponseDto: CaptureResponseDto,
    @Req() req: any,
  ) {
    return this.webhooksService.captureResponse(captureResponseDto, req.user);
  }
}
