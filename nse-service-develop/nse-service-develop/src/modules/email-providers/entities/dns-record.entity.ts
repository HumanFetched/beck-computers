import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DnsRecords } from '../types';

@Schema({ timestamps: false, _id: false })
export class DnsRecord extends Document {
  @Prop({
    type: String,
    required: true,
    default: DnsRecords.DKIM,
  })
  type: string;

  @Prop({
    type: String,
    required: true,
  })
  key: string;
}

export const DnsRecordSchema = SchemaFactory.createForClass(DnsRecord);
