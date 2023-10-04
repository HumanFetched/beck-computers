import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: false, _id: false })
export class ProviderConfiguration extends Document {
  @Prop({
    type: Number,
    required: false,
    default: 1,
  })
  monthlyMailLimit: number;

  @Prop({
    type: Number,
    required: false,
    default: 1,
  })
  dailyMailLimit: number;
}

export const ProviderConfigurationSchema = SchemaFactory.createForClass(
  ProviderConfiguration,
);
