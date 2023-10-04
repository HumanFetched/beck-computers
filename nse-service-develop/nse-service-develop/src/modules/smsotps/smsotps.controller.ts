import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { SendOtpDto } from './dto/send-otp.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { SendSmsService } from './smsotps.service';

@ApiTags('OTP endpoints')
@Controller('sms')
export class SendSmsController {
  constructor(private readonly sendSmsService: SendSmsService) {}

  @Post('send-otp')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiBody({ type: SendOtpDto })
  sendOtp(@Body() sendOtp: SendOtpDto) {
    return this.sendSmsService.sendOtp(sendOtp);
  }
  @Post('verify-otp')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiBody({ type: VerifyOtpDto })
  verifyOtp(@Req() req: any, @Body() verifyOtp: VerifyOtpDto) {
    return this.sendSmsService.verifyOtp(verifyOtp, req.user);
  }
}
