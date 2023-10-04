import {
  ProviderConfiguration,
  ProviderConfigurationSchema,
} from './provider-configuration.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types, Document } from 'mongoose';
import { TConnectionType } from '../../../types';
import { EmailProvider } from '../../email-providers/entities/email-provider.entity';
import { User } from '../../users/entities/user.entity';
import { ConnectionType } from '../types';
// import mongooseFieldEncryption from 'mongoose-field-encryption';

// const fieldEncryption = mongooseFieldEncryption.fieldEncryption;
@Schema({ timestamps: true })
export class ProviderDetail extends Document {
  @Prop({
    type: SchemaTypes.ObjectId,
    required: true,
    ref: EmailProvider.name,
  })
  provider: EmailProvider;

  @Prop({
    type: String,
    required: true,
    default: ConnectionType.API,
  })
  connectionType: TConnectionType;

  @Prop({
    type: Boolean,
    required: false,
    default: false,
  })
  isActive: boolean;

  @Prop({
    type: Object,
    required: false,
  })
  apiDetails: Record<string, string>;

  @Prop({
    type: Object,
    required: false,
  })
  smtpDetails: Record<string, unknown>;

  @Prop({
    type: ProviderConfigurationSchema,
    required: false,
  })
  configuration: ProviderConfiguration;

  @Prop({
    type: SchemaTypes.ObjectId,
    required: true,
    ref: User.name,
  })
  user: Types.ObjectId;
}

export const ProviderDetailSchema =
  SchemaFactory.createForClass(ProviderDetail);

// ProviderDetailSchema.plugin(fieldEncryption, {
//   fields: ['apiDetails', 'smtpDetails'],
//   secret: 'DKFDKSDF7DF9SFJHSDFNMSMDFY7S6D6FS6',
// });
