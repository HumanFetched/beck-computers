import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../users/entities/user.entity';
import { SmsOtps, SmsOtpsSchema } from './entities/smsotps.entity';
import { SendSmsController } from './smsotps.controller';
import { SendSmsService } from './smsotps.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: SmsOtps.name,
        schema: SmsOtpsSchema,
      },
    ]),
    // TODO: use user service module instead of model
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [SendSmsController],
  providers: [SendSmsService],
  exports: [SendSmsService],
})
export class SendSmsModule {}
