import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: false, _id: false })
class RecordsFields extends Document {
  @Prop({
    type: Boolean,
    required: false,
    default: false,
  })
  DMarc?: boolean;

  @Prop({
    type: Boolean,
    required: false,
    default: false,
  })
  SPF?: boolean;

  @Prop({
    type: Boolean,
    required: false,
    default: false,
  })
  DKIM?: boolean;

  @Prop({
    type: Boolean,
    required: false,
    default: false,
  })
  MX?: boolean;

  @Prop({
    type: Boolean,
    required: false,
    default: false,
  })
  CNAME?: boolean;
}
const recordsSchema = SchemaFactory.createForClass(RecordsFields);

@Schema({ timestamps: false, _id: false })
export class AuthenticationFields extends Document {
  @Prop({
    type: String,
    required: true,
    default: '',
  })
  provider: string;

  @Prop({
    type: recordsSchema,
    required: true,
    default: {},
  })
  records: RecordsFields;
}

export const authenticationSchema =
  SchemaFactory.createForClass(AuthenticationFields);
