import { IProviderGroup } from './provider-group';

export interface IApiKey {
  name: string;
  description?: string;
  key?: string;
  isActive?: boolean;
  providerGroup?: IProviderGroup;
  user?: string;
  _id: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ICreateApiKeyRequest {
  name: string;
  description: string;
  isActive: boolean;
}

export interface IGetApiKeyRequest {
  id: string;
  fields?: string;
}

export interface IDeleteApiKeyResponse {
  status: string;
  id: string;
}

export interface IUpdateApiKeyRequest {
  id: string;
  body: {
    name?: string;
    description?: string;
    isActive?: boolean;
    providerGroup?: string;
  };
}
