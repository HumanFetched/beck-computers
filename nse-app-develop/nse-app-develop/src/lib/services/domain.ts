import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import {
  ICreateDomainRequest,
  IDeleteDomainResponse,
  IDomain,
  IDomainRecords,
  IDomainUpdateRequest,
  IGetDomainRequest,
  IListRequest,
  IListResponse,
} from '../types';
import { objToQueryParams } from '../utils/helper';

export const domainEndpoints = (
  builder: EndpointBuilder<
    BaseQueryFn<
      string | FetchArgs,
      unknown,
      FetchBaseQueryError,
      Record<string, unknown>,
      FetchBaseQueryMeta
    >,
    never,
    'nseApi'
  >,
) => {
  return {
    listDomains: builder.mutation<IListResponse<IDomain>, IListRequest>({
      query: (data) =>
        `domains?${objToQueryParams({
          page: data.page || 1,
          limit: data.limit || 10,
          fields: encodeURIComponent(data.fields || ''),
          filter: JSON.stringify(data.filter) || '',
        })}`,
    }),

    getDomain: builder.mutation<{ result: IDomain }, IGetDomainRequest>({
      query: (data) =>
        `domains/${data.id}?${objToQueryParams({
          fields: data.fields || '',
        })}`,
    }),

    createDomain: builder.mutation<{ result: IDomain }, ICreateDomainRequest>({
      query: (data) => {
        return {
          url: `domains`,
          method: 'POST',
          body: data,
        };
      },
    }),

    verifyDomain: builder.mutation<{ result: IDomain }, { id: string }>({
      query: (data) => `domains/${data.id}/verify`,
    }),

    deleteDomain: builder.mutation<IDeleteDomainResponse, { id: string }>({
      query: (data) => {
        return {
          url: `domains/${data.id}`,
          method: 'DELETE',
        };
      },
    }),

    verifyDomainRecords: builder.mutation<
      { results: IDomainRecords[] },
      { id: string }
    >({
      query: (data) => `domains/${data.id}/records`,
    }),

    updateDomain: builder.mutation<{ result: IDomain }, IDomainUpdateRequest>({
      query: ({ id, body }) => {
        return {
          url: `domains/${id}`,
          method: 'PATCH',
          body,
        };
      },
    }),
  };
};
