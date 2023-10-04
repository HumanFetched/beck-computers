import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  Query,
  Get,
  Param,
} from '@nestjs/common';
import { EmailProvidersService } from './email-providers.service';
import { CreateEmailProviderDto } from './dto/create-email-provider.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { ListDto } from '../../common-dto';

@Controller('email-providers')
@ApiTags('Email providers endpoints')
export class EmailProvidersController {
  constructor(private readonly emailProvidersService: EmailProvidersService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  create(
    @Body() createEmailProviderDto: CreateEmailProviderDto,
    @Req() req: any,
  ) {
    return this.emailProvidersService.create(createEmailProviderDto, req.user);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  findAll(@Query() listEmailProviderDto: ListDto) {
    return this.emailProvidersService.findAll(listEmailProviderDto);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  findOne(@Param('id') _id: string, @Query('fields') fields: string) {
    return this.emailProvidersService.findOne({ _id, fields });
  }
}
