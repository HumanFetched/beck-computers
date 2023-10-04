import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types, Document } from 'mongoose';
import { EmailProvider } from 'src/modules/email-providers/entities/email-provider.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { ProviderDetail } from '../../provider-details/entities/provider-detail.entity';
import { ProviderGroup } from '../../provider-groups/entities/provider-group.entity';
import { EmailStatusTypes } from '../types';

@Schema({ timestamps: true })
export class EmailReports extends Document {
  @Prop({
    type: String,
    required: false,
    default: '',
  })
  notificationFrom: string;

  @Prop({
    type: [String],
    required: false,
    default: [],
  })
  notificationTo: string[];

  @Prop({
    type: String,
    required: false,
  })
  error: string;

  @Prop({
    type: String,
    required: false,
  })
  domain: string;

  @Prop({
    type: SchemaTypes.ObjectId,
    required: true,
    ref: User.name,
  })
  user: Types.ObjectId;

  @Prop({
    type: SchemaTypes.ObjectId,
    required: false,
    ref: ProviderGroup.name,
  })
  group: ProviderGroup;

  @Prop({
    type: SchemaTypes.ObjectId,
    required: false,
    ref: ProviderDetail.name,
  })
  providerDetails: ProviderDetail;

  @Prop({
    type: SchemaTypes.ObjectId,
    required: false,
    ref: EmailProvider.name,
  })
  emailProvider: EmailProvider;

  @Prop({
    type: String,
    required: false,
    default: EmailStatusTypes.SENT,
  })
  status: string;

  @Prop({
    type: String,
    default: '',
  })
  referenceId: string;

  @Prop({
    type: Date,
    default: '',
  })
  notifiedAt: Date;

  @Prop({
    type: Boolean,
    default: false,
  })
  isNotified: boolean;

  @Prop({
    type: String,
    required: false,
    default: '',
  })
  sender: string;

  @Prop({
    type: String,
    required: true,
    default: '',
  })
  recipient: string;

  @Prop({
    type: String,
    default: '',
  })
  bounceDetailShort: string;

  @Prop({
    type: String,
    default: '',
  })
  bounceDetailLong: string;

  @Prop({
    type: String,
    default: '',
  })
  subject: string;

  @Prop({
    type: String,
    default: '',
  })
  messageId: string;

  @Prop({
    type: Boolean,
    required: false,
    default: false,
  })
  hasAttachment: boolean;
}

export const EmailReportsSchema = SchemaFactory.createForClass(EmailReports);

EmailReportsSchema.index({
  sender: 'text',
  recipient: 'text',
  domain: 'text',
  status: 'text',
  subject: 'text',
  group: 'text',
});
