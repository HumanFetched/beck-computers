import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types, Document } from 'mongoose';
import { User } from 'src/modules/users/entities/user.entity';
import { CloudStorageTypes } from '../types';
import { DropboxFields, DropboxFieldsSchema } from './dropbox.entity';
import {
  GoogleDriveFields,
  GoogleDriveFieldsSchema,
} from './google-drive.entity';

@Schema({ timestamps: true })
export class CloudStorage extends Document {
  @Prop({
    type: SchemaTypes.ObjectId,
    required: true,
    ref: User.name,
  })
  user: Types.ObjectId;

  @Prop({
    type: String,
    required: true,
    default: CloudStorageTypes,
  })
  cloudStorageName: string;

  @Prop({
    type: String,
    required: false,
    default: '',
  })
  name: string;

  @Prop({
    type: String,
    required: true,
    default: '',
  })
  email: string;

  @Prop({
    type: GoogleDriveFieldsSchema || DropboxFieldsSchema,
    required: true,
  })
  data: GoogleDriveFields | DropboxFields;

  @Prop({
    type: Boolean,
    required: false,
    default: false,
  })
  isActive: boolean;
}

export const CloudStorageSchema = SchemaFactory.createForClass(CloudStorage);
