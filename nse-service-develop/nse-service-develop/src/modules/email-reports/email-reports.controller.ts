import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Headers,
  Query,
  Req,
} from '@nestjs/common';
import { EmailReportsService } from './email-reports.service';
import { CreateEmailReportDto } from './dto/create-email-report.dto';
import { UpdateEmailReportDto } from './dto/update-email-report.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiHeader, ApiTags } from '@nestjs/swagger';
import { ListDto } from 'src/common-dto';
import { ExportEmailReportDto } from './dto/export-email-report.dto';
import { ExportCSVDto } from './dto/exportCSV-dto';

@Controller('email-reports')
@ApiTags('Email reports')
export class EmailReportsController {
  constructor(private readonly emailReportsService: EmailReportsService) {}

  @Post()
  @ApiHeader({
    name: 'x-api-key',
    description: 'Custom header',
  })
  create(
    @Body() createEmailReportDto: CreateEmailReportDto,
    @Headers() headers: { 'x-api-key': string },
  ) {
    return this.emailReportsService.create(
      headers['x-api-key'],
      createEmailReportDto,
    );
  }

  @Get('search')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  search(@Query() searchEmailReportDto: ListDto, @Req() req: any) {
    return this.emailReportsService.search(searchEmailReportDto, req.user);
  }

  @Get('search-export-csv')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  searchExport(@Query() searchExportEmailReportDto: ListDto, @Req() req: any) {
    return this.emailReportsService.searchExportCSV(
      searchExportEmailReportDto,
      req.user,
    );
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  findAll(@Query() listEmailReportDto: ListDto, @Req() req: any) {
    return this.emailReportsService.findAll(listEmailReportDto, req.user);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  findOne(@Param('id') _id: string, @Query('fields') fields: string) {
    return this.emailReportsService.findOne({ _id, fields });
  }

  @Patch(':id')
  update(
    @Param('id') _id: string,
    @Body() updateEmailReportDto: UpdateEmailReportDto,
  ) {
    return this.emailReportsService.update(_id, updateEmailReportDto);
  }

  @Post('export')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  exportToCloudStorage(
    @Body() exportEmailReportDto: ExportEmailReportDto,
    @Req() req: any,
  ) {
    return this.emailReportsService.exportToCloudStorage(
      exportEmailReportDto,
      req.user,
    );
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  remove(@Param('id') id: string, @Req() req: any) {
    return this.emailReportsService.remove(id, req.user);
  }

  @Post('export-csv')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  exportCSV(@Body() exportCSVDto: ExportCSVDto, @Req() req: any) {
    return this.emailReportsService.exportCSV(exportCSVDto, req.user);
  }
}
