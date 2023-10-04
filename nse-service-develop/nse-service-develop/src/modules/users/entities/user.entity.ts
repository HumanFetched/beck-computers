import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class User extends Document {
  @Prop({
    default: '',
  })
  firstName: string;

  @Prop({
    default: '',
  })
  lastName: string;

  @Prop({
    required: true,
  })
  email: string;

  @Prop({
    type: String,
    default: '',
  })
  phone: string;

  @Prop({
    type: String,
    default: '',
  })
  dialCode: string;

  @Prop({
    type: String,
  })
  profileImage: string;

  @Prop({
    type: String,
  })
  companyName: string;

  @Prop({
    type: String,
  })
  country: string;

  @Prop({
    type: String,
  })
  address: string;

  @Prop({
    type: String,
  })
  city: string;

  @Prop({
    type: String,
  })
  state: string;

  @Prop({
    type: String,
  })
  zipCode: string;

  @Prop({
    type: String,
  })
  vatOrGstNumber: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
