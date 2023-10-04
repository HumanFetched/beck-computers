import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types, Document } from 'mongoose';
import { User } from 'src/modules/users/entities/user.entity';
import { nanoid } from 'nanoid';
import {
  EventConfigurations,
  EventConfigurationsSchema,
} from './configurations.entity';
import { ProviderDetail } from 'src/modules/provider-details/entities/provider-detail.entity';

@Schema({ timestamps: true })
export class Webhooks extends Document {
  @Prop({
    type: String,
    required: false,
    default: () => nanoid(12),
  })
  _id: string;

  @Prop({
    type: String,
    required: true,
    default: '',
  })
  name: string;

  @Prop({
    type: String,
    required: false,
    default: '',
  })
  accountId: string;

  @Prop({
    type: String,
    required: false,
    default: '',
  })
  description: string;

  @Prop({
    type: Boolean,
    required: false,
    default: true,
  })
  isActive: boolean;

  @Prop({
    type: SchemaTypes.ObjectId,
    ref: ProviderDetail.name,
  })
  provider: Types.ObjectId;

  @Prop({
    type: EventConfigurationsSchema,
    required: false,
  })
  configurations?: EventConfigurations;

  @Prop({
    type: SchemaTypes.ObjectId,
    required: true,
    ref: User.name,
  })
  user: Types.ObjectId;
}

export const WebhooksSchema = SchemaFactory.createForClass(Webhooks);
