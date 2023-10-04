import { ConnectionType } from './common-types';
import { IConfiguration, IEmailProvider } from './email-provider';

export interface IProvider {
  _id: string;
  provider: IEmailProvider;
  connectionType: ConnectionType;
  configuration?: IConfiguration;
  smtpDetails?: ISmtpDetails | null;
  apiDetails?: Record<string, unknown> | null;
  user: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ISmtpDetails {
  displayName: string;
  username: string;
  password: string;
  host: string;
  port: number;
}
export interface ICreateProverDetailsRequest {
  provider: string;
  connectionType: ConnectionType;
  configuration: IConfiguration;
  smtpDetails?: ISmtpDetails;
  apiDetails?: Record<string, unknown>;
  providerGroupId?: string;
}

export interface IUpdateProviderDetailsRequest {
  id: string;
  body: {
    connectionType: ConnectionType;
    configuration?: IConfiguration;
    smtpDetails?: ISmtpDetails;
    apiDetails?: Record<string, unknown>;
    isActive?: boolean;
  };
}
