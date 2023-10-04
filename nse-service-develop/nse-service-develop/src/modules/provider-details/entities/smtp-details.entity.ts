import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: false, _id: false })
export class SmtpDetails extends Document {
  @Prop({
    type: String,
    required: true,
  })
  username: string;

  @Prop({
    type: String,
    required: true,
  })
  password: string;

  @Prop({
    type: String,
    required: true,
  })
  host: string;

  @Prop({
    type: Number,
    required: true,
  })
  port: number;
}

export const SmtpDetailsSchema = SchemaFactory.createForClass(SmtpDetails);
