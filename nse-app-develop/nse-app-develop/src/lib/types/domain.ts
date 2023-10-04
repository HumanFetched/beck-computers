import { IProviderGroup } from './provider-group';

export type DomainTypes = 'TXT';

export interface IDomain {
  _id: string;
  user?: string;
  domain?: string;
  key?: string;
  value?: string;
  type?: DomainTypes;
  isVerified?: boolean;
  comments?: string;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
  group?: IProviderGroup;
  authentication?: IDomainRecords[];
}

export interface IGetDomainRequest {
  id: string;
  fields?: string;
}

export interface IDeleteDomainResponse {
  status: string;
  id: string;
}

export interface IDomainRecords {
  provider: string;
  records: {
    MX?: boolean;
    CNAME?: boolean;
    DKIM?: boolean;
    DMarc?: boolean;
    SPF?: boolean;
  };
}

export interface IUpdateDomainBody {
  user?: string;
  domain?: string;
  key?: string;
  value?: string;
  type?: DomainTypes;
  isVerified?: boolean;
  comments?: string;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
  group?: IProviderGroup;
}

export interface ICreateDomainRequest {
  domain: string;
  comments: string;
}

export interface IDomainUpdateRequest {
  id: string;
  body: IUpdateDomainBody;
}
