import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotAcceptableException,
  NotFoundException,
  Post,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBadRequestResponse, ApiBody, ApiTags } from '@nestjs/swagger';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ConfirmAccountDto } from './dto/confirm-account.dto';
import { ResetPasswordDto } from './dto/reset-password';
import { ResetCodeDto } from './dto/reset-code.dto';
import { ResendCodeDto } from './dto/resend-code.dto';
import { RefreshDto } from './dto/refresh.dto';

@ApiTags('Authentication endpoints')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('captcha')
  getCaptcha() {
    return this.authService.getCaptcha();
  }

  @Post('register')
  @ApiBadRequestResponse({
    description: 'Bad request',
  })
  @ApiBody({ type: RegisterDto })
  async register(
    @Body()
    registerRequest: RegisterDto,
  ) {
    const { email, password, captcha } = registerRequest;
    // verify captcha
    const isValidCaptcha = await this.authService.verifyCaptcha({ ...captcha });
    if (!isValidCaptcha) {
      throw new NotAcceptableException('Invalid Captcha');
    }

    try {
      return await this.authService.registerUser({ email, password });
    } catch (error) {
      throw new NotFoundException('Account not created');
    }
  }

  @Post('login')
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiBody({ type: LoginDto })
  async login(@Body() authenticateRequest: LoginDto) {
    try {
      return await this.authService.authenticateUser(authenticateRequest);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Post('confirm-account')
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiBody({ type: ConfirmAccountDto })
  async confirmAccount(@Body() confirmAccountRequest: ConfirmAccountDto) {
    const { email, code } = confirmAccountRequest;
    try {
      return await this.authService.confirmUserAccount(email, code);
    } catch (error) {
      throw new BadRequestException('Invalid Code');
    }
  }

  @Post('resend-confirmation-code')
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiBody({ type: ResendCodeDto })
  async resendAccountConfirmationCode(@Body('email') email: string) {
    try {
      return await this.authService.resendAccountConfirmationCode(email);
    } catch (error) {
      throw new BadRequestException(
        'Cannot send reset code at the moment, try again later.',
      );
    }
  }

  @Post('reset-code')
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiBody({ type: ResetCodeDto })
  async requestPasswordResetCode(@Body('email') email: string) {
    try {
      return await this.authService.requestPasswordResetCode(email);
    } catch (error) {
      throw new BadRequestException(
        'Cannot reset at the moment, try again later.',
      );
    }
  }

  @Post('reset-password')
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiBody({ type: ResetPasswordDto })
  async resetPassword(
    @Body()
    resetPasswordRequest: ResetPasswordDto,
  ) {
    const { email, code, password } = resetPasswordRequest;
    try {
      return await this.authService.resetPassword(email, code, password);
    } catch (error) {
      throw new BadRequestException('Enter a valid code');
    }
  }

  @Post('refresh')
  @ApiBody({ type: RefreshDto })
  async refresh(
    @Body()
    refresh: RefreshDto,
    @Req() req: any,
  ) {
    const { refreshToken } = refresh;
    try {
      return await this.authService.refresh(refreshToken, req.headers);
    } catch (error) {
      throw new BadRequestException('Sign-in required');
    }
  }
}
