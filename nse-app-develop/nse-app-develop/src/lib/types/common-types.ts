import { IFilter } from './emailReports';

export interface IListResponse<T> {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
  results: T[];
}

export interface IListRequest {
  page?: number;
  limit?: number;
  filter?: IFilter;
  q?: string;
  fields?: string;
  fromDuration?: string;
  toDuration?: string;
}

export type ConnectionType = 'SMTP' | 'API';

export type IProviderFormSchema = {
  [key in ConnectionType]: IProviderFormSchemaObject[];
};

export interface IProviderFormSchemaObject {
  name: string;
  type: 'text' | 'number';
  key: string;
  disabled?: boolean;
}

export interface IListingConfig {
  type: 'list' | 'search';
  searchQuery: string;
}

export interface ISearchRequest {
  page?: number;
  limit?: number;
  q: string;
  filter?: IFilter;
}
