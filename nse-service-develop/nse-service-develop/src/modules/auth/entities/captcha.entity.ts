import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema({ timestamps: true })
export class Captcha extends Document {
  @Prop({
    default: '',
  })
  code: string;
}
export const CaptchaSchema = SchemaFactory.createForClass(Captcha);
CaptchaSchema.index({ createdAt: 1 }, { expireAfterSeconds: 300 });
