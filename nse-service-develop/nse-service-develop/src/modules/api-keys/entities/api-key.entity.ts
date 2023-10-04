import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';
import { ProviderGroup } from '../../provider-groups/entities/provider-group.entity';
import { User } from '../../users/entities/user.entity';

@Schema({ timestamps: true })
export class ApiKey extends Document {
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
  description: string;

  @Prop({
    type: String,
    required: true,
  })
  key: boolean;

  @Prop({
    type: Boolean,
    required: false,
    default: false,
  })
  isActive: boolean;

  // @Prop({
  //   type: SchemaTypes.ObjectId,
  //   required: true,
  //   ref: ProviderGroup.name,
  // })
  // providerGroup: Types.ObjectId;

  @Prop({
    type: SchemaTypes.ObjectId,
    required: true,
    ref: User.name,
  })
  user: Types.ObjectId;
}

export const ApiKeySchema = SchemaFactory.createForClass(ApiKey);

ApiKeySchema.index({ name: 'text', description: 'text', key: 'text' });
