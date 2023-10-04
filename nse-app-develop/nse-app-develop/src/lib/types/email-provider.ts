import { ConnectionType, IProviderFormSchemaObject } from './common-types';

export interface IConfiguration {
  monthlyMailLimit: number;
  dailyMailLimit: number;
}
export interface IEmailProvider {
  _id: string;
  name: string;
  displayName: string;
  records?: IEmailProvidersRecord[];
  user: string;
  apiSchema?: IProviderFormSchemaObject[];
  smtpSchema?: IProviderFormSchemaObject[];
  supports?: ConnectionType[];
  configuration: IConfiguration;
  createdAt: string;
  updatedAt: string;
}

export interface IEmailProvidersRecord {
  type: string;
  key: string;
}
