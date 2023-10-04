import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: false, _id: false })
export class EventConfigurations extends Document {
  @Prop({
    type: Boolean,
    default: false,
  })
  isDelivered: boolean;

  @Prop({
    type: Boolean,
    default: false,
  })
  isBounced: boolean;

  @Prop({
    type: Boolean,
    default: false,
  })
  isDropped: boolean;

  @Prop({
    type: Boolean,
    default: false,
  })
  isFailed: boolean;

  @Prop({
    type: Boolean,
    default: false,
  })
  isDeferred: boolean;

  @Prop({
    type: Boolean,
    default: false,
  })
  isSpammed: boolean;
}

export const EventConfigurationsSchema =
  SchemaFactory.createForClass(EventConfigurations);
