import { IDomain } from './domain';
import { IProvider } from './provider-details';

export interface IProviderGroup {
  _id: string;
  name: string;
  user: string;
  domain: IDomain[] | string;
  providers: IProvider[];
  createdAt: string;
  updatedAt: string;
}

export interface IAddRemoveProviderInGroupResponse {
  group: IProviderGroup;
  provider: IProvider | string;
}

export interface IDeleteProviderGroupResponse {
  status: string;
  id: string;
}

export interface IGetProviderGroupRequest {
  id: string;
  fields?: string;
}

export interface ICreateProviderRequest {
  name: string;
  domain: IDomain[];
  providers?: string[];
}

export interface IUpdateProviderGroupRequest {
  id: string;
  body: {
    name?: string;
    domain?: string[];
    providers?: string[];
  };
}

export interface IAddRemoveProviderInGroupRequest {
  groupId: string;
  provider: string;
}
export interface IAddRemoveDomainInGroupRequest {
  groupId: string;
  domainId: string;
}

export interface ISearchProviderGroup {
  limit: number;
  page: number;
  q: string;
}
