import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema({ timestamps: true })
export class SmsOtps extends Document {
  @Prop({
    default: '',
  })
  otp: string;

  @Prop({
    default: '',
  })
  phoneNumber: string;
}
export const SmsOtpsSchema = SchemaFactory.createForClass(SmsOtps);
SmsOtpsSchema.index({ updatedAt: 1 }, { expireAfterSeconds: 1800 });
