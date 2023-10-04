import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Document, Types } from 'mongoose';
import { Domain } from '../../domains/entities/domain.entity';
import { ProviderDetail } from '../../provider-details/entities/provider-detail.entity';
import { User } from '../../users/entities/user.entity';

@Schema({ timestamps: true })
export class ProviderGroup extends Document {
  @Prop({
    type: String,
    required: false,
    default: '',
  })
  name: string;

  @Prop({
    type: SchemaTypes.ObjectId,
    required: true,
    ref: User.name,
  })
  user: Types.ObjectId;

  @Prop({
    type: [SchemaTypes.ObjectId],
    required: false,
    ref: Domain.name,
  })
  domain: string[];

  @Prop({
    type: [SchemaTypes.ObjectId],
    required: false,
    ref: ProviderDetail.name,
  })
  providers: string[];
}

export const ProviderGroupSchema = SchemaFactory.createForClass(ProviderGroup);
ProviderGroupSchema.index({ name: 'text' });
