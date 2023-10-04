import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  UseGuards,
  Req,
  Query,
  Param,
  Patch,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ListDto } from '../../common-dto';
import { DomainsService } from './domains.service';
import { CreateDomainDto } from './dto/create-domain.dto';
import { UpdateDomainDto } from './dto/update-domain.dto';

@Controller('domains')
@ApiTags('Domain endpoints')
export class DomainsController {
  constructor(private readonly domainsService: DomainsService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  create(@Body() createDomainDto: CreateDomainDto, @Req() req: any) {
    return this.domainsService.create(createDomainDto, req.user);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  update(
    @Param('id') _id: string,
    @Body() updateDomainDto: UpdateDomainDto,
    @Req() req: any,
  ) {
    return this.domainsService.update(_id, updateDomainDto, req.user);
  }

  @Get('search')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  search(@Query() serchDomainDto: ListDto, @Req() req: any) {
    return this.domainsService.search(serchDomainDto, req.user);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  findAll(@Query() listDomainDto: ListDto, @Req() req: any) {
    return this.domainsService.findAll(listDomainDto, req.user);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  findOne(@Param('id') _id: string, @Query('fields') fields: string) {
    return this.domainsService.findOne({ _id, fields });
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  remove(@Param('id') id: string, @Req() req: any) {
    return this.domainsService.remove(id, req.user);
  }

  @Get(':id/verify')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  verifyDomain(@Param('id') id: string, @Req() req: any) {
    return this.domainsService.verifyDomain(id, req.user);
  }

  @Get(':id/records')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  verifyDomainRecords(@Param('id') id: string, @Req() req: any) {
    return this.domainsService.verifyDomainRecords(id, req.user);
  }
}
