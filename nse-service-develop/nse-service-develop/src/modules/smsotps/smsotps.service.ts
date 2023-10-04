import { PublishCommand, SNSClient } from '@aws-sdk/client-sns';
import {
  ConflictException,
  ForbiddenException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SNS_CLIENT } from 'src/sns/constants';
import { User } from '../users/entities/user.entity';
import { SendOtpDto } from './dto/send-otp.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { SmsOtps } from './entities/smsotps.entity';

@Injectable()
export class SendSmsService {
  constructor(
    @Inject(SNS_CLIENT) private snsClient: SNSClient,
    @InjectModel(SmsOtps.name) private smsotpsModel: Model<SmsOtps>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  // SEND OTP
  async sendOtp({ dialCode, phoneNumber }: SendOtpDto) {
    const formattedPhoneNumber = dialCode + phoneNumber;

    // find if account with same phone number exists
    const userWithSameNumber = await this.userModel
      .findOne({
        phone: formattedPhoneNumber,
      })
      .lean();
    if (userWithSameNumber) {
      throw new ConflictException(
        'This number is already attached with existing account.',
      );
    }

    // find previously sent otp
    const oldsmsotpData = await this.smsotpsModel
      .findOneAndUpdate(
        { phoneNumber: formattedPhoneNumber },
        { updatedAt: Date.now() },
      )
      .lean();

    let otp;

    if (oldsmsotpData) {
      otp = oldsmsotpData.otp;
    } else {
      // generate new OTP
      const otpLength = { min: 100000, max: 999999 };
      otp =
        Math.floor(Math.random() * (otpLength.max - otpLength.min + 1)) +
        otpLength.min;

      const smsotps = new this.smsotpsModel({
        phoneNumber: formattedPhoneNumber,
        otp,
      });
      smsotps.save();
    }

    // aws publish command
    const command = new PublishCommand({
      Message: `${otp} is the otp to verify your phone number on NSE.`,
      PhoneNumber: formattedPhoneNumber,
      MessageAttributes: {
        sms: {
          DataType: 'String.Array',
          StringValue: JSON.stringify([formattedPhoneNumber]),
        },
      },
    });
    try {
      await this.snsClient.send(command);
    } catch (error) {
      throw new ForbiddenException('OTP service is down. Try again later');
    }
    return { message: 'OTP sent successfully' };
  }

  async verifyOtp({ dialCode, phoneNumber, otp }: VerifyOtpDto, user: User) {
    const formattedPhoneNumber = dialCode + phoneNumber;
    // if valid otp then delete it
    const isOtpValid = await this.smsotpsModel
      .findOneAndDelete({ phoneNumber: formattedPhoneNumber, otp })
      .lean();

    if (!isOtpValid) {
      throw new ForbiddenException('Otp is invalid or expired');
    }

    // add phone number to user schema
    await this.userModel.findOneAndUpdate(
      { email: user.email },
      { phone: phoneNumber, dialCode },
    );
    return {
      message: 'Phone number verified successfully ',
    };
  }
}
