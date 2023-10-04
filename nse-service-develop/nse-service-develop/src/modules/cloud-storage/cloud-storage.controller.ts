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
import { CloudStorageService } from './cloud-storage.service';
import { CreateCloudStorageDto } from './dto/create-cloud-storage.dto';
import { UpdateCloudStorageDto } from './dto/update-cloud-storage.dto';

@Controller('cloud-storage')
@ApiTags('cloud storage endpoints')
export class CloudStorageController {
  constructor(private readonly cloudStorageService: CloudStorageService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  create(
    @Body() createCloudStorageDto: CreateCloudStorageDto,
    @Req() req: any,
  ) {
    return this.cloudStorageService.create(createCloudStorageDto, req.user);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  findAll(@Query() listCloudStorageDto: ListDto, @Req() req: any) {
    return this.cloudStorageService.findAll(listCloudStorageDto, req.user);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  findOne(@Param('id') _id: string, @Query('fields') fields: string) {
    return this.cloudStorageService.findOne({ _id, fields });
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  update(
    @Param('id') _id: string,
    @Body() updateCloudStorageDto: UpdateCloudStorageDto,
    @Req() req: any,
  ) {
    return this.cloudStorageService.update(
      _id,
      updateCloudStorageDto,
      req.user,
    );
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  remove(@Param('id') id: string, @Req() req: any) {
    return this.cloudStorageService.remove(id, req.user);
  }
}
