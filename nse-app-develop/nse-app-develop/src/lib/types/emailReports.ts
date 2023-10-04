import { ICloudStorageTypes } from './cloud-storage';
import { IProvider } from './provider-details';
import { IUser } from './user';
import { IEmailProvider } from './email-provider';
import { IProviderGroup } from './provider-group';

export interface IEmailReport {
  _id: string;
  user: IUser;
  providerDetails: IProvider;
  sender: string;
  recipient: string;
  status?: string;
  referenceId?: string;
  isNotified?: boolean;
  error?: string;
  subject?: string;
  bounceDetailShort?: string;
  bounceDetailLong?: string;
  notificationFrom?: string;
  notificationTo?: string;
  notifiedAt?: string;
  createdAt: string;
  updatedAt: string;
  emailProvider?: IEmailProvider;
  group?: IProviderGroup;
}

export interface IGetEmailReportsRequest {
  id: string;
  fields?: string;
}
export interface IExportToCloudStorageRequest {
  cloudPlatform: ICloudStorageTypes;
  fromDuration: Date;
  toDuration: Date;
}

// export interface IFilter {
//   sender?: string;
//   recipient?: string;
//   domain?: string;
//   subject?: string;
//   status?: string;
//   isVerified?: boolean;
//   fromDuration?: string;
//   toDuration?: string;
// }

export interface IFilter {
  dateRange?: string;
  fromDuration?: string;
  toDuration?: string;
  domain?: string;
  sender?: string;
  toDomain?: string;
  recipient?: string;
  status?: string;
  subject?: string;
  isVerified?: boolean;
  group?: string;
  hasAttachment?: boolean;
}

export interface IExportToCsvRequest {
  fromDuration?: string;
  toDuration?: string;
  options?: {
    filter?: IFilter;
  };
}

export interface IExportToCsvResponse {
  type: string;
  data: number[];
}
