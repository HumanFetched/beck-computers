import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';
import { User } from '../../users/entities/user.entity';
import { DnsRecord, DnsRecordSchema } from './dns-record.entity';

@Schema({ timestamps: true })
export class EmailProvider extends Document {
  @Prop({
    type: String,
    required: true,
  })
  name: string;

  @Prop({
    type: String,
    required: false,
    default: '',
  })
  displayName: string;

  @Prop({
    type: [DnsRecordSchema],
    required: true,
  })
  records: DnsRecord[];

  @Prop({
    type: [Object],
    required: false,
  })
  apiSchema: Record<string, unknown>[];

  @Prop({
    type: [Object],
    required: false,
  })
  smtpSchema: Record<string, unknown>[];

  @Prop({
    type: [String],
    required: false,
    default: [],
  })
  supports: string[];

  @Prop({
    type: SchemaTypes.ObjectId,
    required: true,
    ref: User.name,
  })
  user: Types.ObjectId;
}

export const EmailProviderSchema = SchemaFactory.createForClass(EmailProvider);
EmailProviderSchema.index({ name: 'text', displayName: 'text' });
