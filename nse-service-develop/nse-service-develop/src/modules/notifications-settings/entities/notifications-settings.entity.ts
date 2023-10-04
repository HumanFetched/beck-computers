import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types, Document } from 'mongoose';
import { User } from 'src/modules/users/entities/user.entity';

@Schema({ timestamps: true })
export class NotificationsSettings extends Document {
  @Prop({
    type: SchemaTypes.ObjectId,
    required: true,
    ref: User.name,
  })
  user: Types.ObjectId;

  @Prop({
    type: String,
    required: true,
  })
  domain: string;

  @Prop({
    type: String,
    required: false,
    default: '',
  })
  email?: string;

  @Prop({
    type: Number,
    required: true,
  })
  maxNotifications: number;

  @Prop({
    type: [String],
    required: false,
    default: [],
  })
  notifyEmails: string[];

  @Prop({
    type: Boolean,
    required: true,
  })
  isActive: boolean;

  @Prop({
    type: Boolean,
    required: false,
    default: false,
  })
  isNotifySender: boolean;

  @Prop({
    type: String,
    required: false,
    default: '',
  })
  comments: string;
}

export const NotificationsSettingsSchema = SchemaFactory.createForClass(
  NotificationsSettings,
);
