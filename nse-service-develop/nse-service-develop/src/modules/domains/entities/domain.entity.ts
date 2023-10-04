import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types, Document } from 'mongoose';
import { ProviderGroup } from '../../provider-groups/entities/provider-group.entity';
import { User } from '../../users/entities/user.entity';
import { DomainTypes } from '../types';
import { AuthenticationFields, authenticationSchema } from './authentication.entity';

@Schema({ timestamps: true, toJSON: { virtuals: true } })
export class Domain extends Document {
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
    type: Boolean,
    required: false,
    default: false,
  })
  isActive: boolean;

  @Prop({
    type: String,
    required: false,
    default: '',
  })
  comments: string;

  @Prop({
    type: String,
    required: true,
  })
  key: string;

  @Prop({
    type: String,
    required: true,
  })
  value: string;

  @Prop({
    type: String,
    required: false,
    default: DomainTypes.TXT,
  })
  type: string;

  @Prop({
    type: Boolean,
    required: false,
    default: false,
  })
  isVerified: boolean;

  @Prop({
    type: [authenticationSchema],
    required: false,
    default: [],
  })
  authentication: AuthenticationFields[];
}

export const DomainSchema = SchemaFactory.createForClass(Domain);

DomainSchema.virtual('group', {
  ref: 'ProviderGroup',
  localField: '_id',
  foreignField: 'domain',
  justOne: true,
});

DomainSchema.index({ domain: 'text' });
