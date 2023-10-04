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
import { ProviderDetailsService } from './provider-details.service';
import { CreateProviderDetailDto } from './dto/create-provider-detail.dto';
import { UpdateProviderDetailDto } from './dto/update-provider-detail.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { ListDto } from '../../common-dto/list.dto';

@Controller('provider-details')
@ApiTags('Provider details endpoint')
export class ProviderDetailsController {
  constructor(
    private readonly providerDetailsService: ProviderDetailsService,
  ) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  create(
    @Body() createProviderDetailDto: CreateProviderDetailDto,
    @Req() req: any,
  ) {
    return this.providerDetailsService.create(
      createProviderDetailDto,
      req.user,
    );
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  findAll(@Query() listProviderDetailsDto: ListDto, @Req() req: any) {
    return this.providerDetailsService.findAll(
      listProviderDetailsDto,
      req.user,
    );
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  findOne(@Param('id') _id: string, @Query('fields') fields: string) {
    return this.providerDetailsService.findOne({ _id, fields });
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  update(
    @Param('id') id: string,
    @Body() updateProviderDetailDto: UpdateProviderDetailDto,
    @Req() req: any,
  ) {
    return this.providerDetailsService.update(
      id,
      updateProviderDetailDto,
      req.user,
    );
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  remove(@Param('id') id: string, @Req() req: any) {
    return this.providerDetailsService.remove(id, req.user);
  }
}
