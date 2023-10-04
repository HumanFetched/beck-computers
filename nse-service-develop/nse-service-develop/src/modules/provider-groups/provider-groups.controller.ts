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
import { ProviderGroupsService } from './provider-groups.service';
import { CreateProviderGroupDto } from './dto/create-provider-group.dto';
import {
  AddDomainDto,
  AddProvidersDto,
  RemoveDomainDto,
  RemoveProviderDto,
  UpdateProviderGroupDto,
} from './dto/update-provider-group.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ListDto } from '../../common-dto';

@Controller('provider-groups')
@ApiTags('Provider group endpoints')
export class ProviderGroupsController {
  constructor(private readonly providerGroupsService: ProviderGroupsService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  create(
    @Body() createProviderGroupDto: CreateProviderGroupDto,
    @Req() req: any,
  ) {
    return this.providerGroupsService.create(createProviderGroupDto, req.user);
  }

  @Get('search')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  search(@Query() serchProviderGroupDto: ListDto, @Req() req: any) {
    return this.providerGroupsService.search(serchProviderGroupDto, req.user);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  findAll(@Query() listProviderGroupDto: ListDto, @Req() req: any) {
    return this.providerGroupsService.findAll(listProviderGroupDto, req.user);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  findOne(@Param('id') _id: string, @Query('fields') fields: string) {
    return this.providerGroupsService.findOne({ _id, fields });
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  update(
    @Param('id') id: string,
    @Body() updateProviderGroupDto: UpdateProviderGroupDto,
    @Req() req: any,
  ) {
    return this.providerGroupsService.update(
      id,
      updateProviderGroupDto,
      req.user,
    );
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  remove(@Param('id') id: string, @Req() req: any) {
    return this.providerGroupsService.remove(id, req.user);
  }

  @Patch(':id/add-provider')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  addProvider(
    @Param('id') id: string,
    @Body() addProvidersDto: AddProvidersDto,
    @Req() req: any,
  ) {
    return this.providerGroupsService.addProvider(
      id,
      addProvidersDto,
      req.user,
    );
  }

  @Delete(':id/remove-provider')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  removeProvider(
    @Param('id') id: string,
    @Body() removeProviderDto: RemoveProviderDto,
    @Req() req: any,
  ) {
    return this.providerGroupsService.removeProvider(
      id,
      removeProviderDto,
      req.user,
    );
  }

  @Patch(':id/add-domain')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  addDomain(
    @Param('id') id: string,
    @Body() addDomainDto: AddDomainDto,
    @Req() req: any,
  ) {
    return this.providerGroupsService.addDomain(id, addDomainDto, req.user);
  }

  @Patch(':id/remove-domain')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  removeDomain(
    @Param('id') id: string,
    @Body() removeDomainDto: RemoveDomainDto,
    @Req() req: any,
  ) {
    return this.providerGroupsService.removeDomain(
      id,
      removeDomainDto,
      req.user,
    );
  }
}
