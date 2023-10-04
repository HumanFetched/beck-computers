import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: false, _id: false })
export class ApiDetails extends Document {
  @Prop({
    type: String,
    required: false,
    default: '',
  })
  displayName: string;

  @Prop({
    type: String,
    required: true,
  })
  apiKey: string;
}

export const ApiDetailsSchema = SchemaFactory.createForClass(ApiDetails);
