import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: false, _id: false })
export class GoogleDriveFields extends Document {
  @Prop({
    type: String,
    required: true,
  })
  refreshToken: string;
}

export const GoogleDriveFieldsSchema =
  SchemaFactory.createForClass(GoogleDriveFields);
