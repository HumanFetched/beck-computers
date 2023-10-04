import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import {
  IDeleteApiKeyResponse,
  IApiKey,
  IGetApiKeyRequest,
  IListRequest,
  IListResponse,
  ICreateApiKeyRequest,
  IUpdateApiKeyRequest,
} from '../types';
import { objToQueryParams } from '../utils/helper';

export const apiKeyEndpoints = (
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
    listApiKeys: builder.mutation<IListResponse<IApiKey>, IListRequest>({
      query: (data) =>
        `apiKeys?${objToQueryParams({
          page: data.page || 1,
          limit: data.limit || 10,
          fields: encodeURIComponent(data.fields || ''),
          filter: JSON.stringify(data.filter) || '',
        })}`,
    }),

    getApiKey: builder.mutation<{ result: IApiKey }, IGetApiKeyRequest>({
      query: (data) =>
        `apiKeys/${data.id}?${objToQueryParams({
          fields: data.fields || '',
        })}`,
    }),

    createApiKey: builder.mutation<{ result: IApiKey }, ICreateApiKeyRequest>({
      query: (data) => {
        return {
          url: `apiKeys`,
          method: 'POST',
          body: data,
        };
      },
    }),

    updateApiKey: builder.mutation<{ result: IApiKey }, IUpdateApiKeyRequest>({
      query: ({ id, body }) => {
        return {
          url: `apiKeys/${id}`,
          method: 'PATCH',
          body,
        };
      },
    }),

    deleteApiKey: builder.mutation<IDeleteApiKeyResponse, { id: string }>({
      query: (data) => {
        return {
          url: `apiKeys/${data.id}`,
          method: 'DELETE',
        };
      },
    }),
  };
};
