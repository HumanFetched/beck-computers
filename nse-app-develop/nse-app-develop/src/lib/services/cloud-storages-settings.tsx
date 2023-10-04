import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import {
  IListRequest,
  IListResponse,
  ICreateCloudStorageSettingsResponse,
  ICreateCloudStorageSettingsRequest,
  ICloudStorageSettings,
  IDeleteCloudStorageSettingsResponse,
  IUpdateCloudStorageSettingsRequest,
} from '../types';
import { objToQueryParams } from '../utils/helper';

export const cloudStoragesSettingsEndpoints = (
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
    listCloudStoragesSettings: builder.mutation<
      IListResponse<ICloudStorageSettings>,
      IListRequest
    >({
      query: (data) =>
        `cloud-storage?${objToQueryParams({
          page: data.page || 1,
          limit: data.limit || 10,
          fields: encodeURIComponent(data.fields || ''),
          filter: JSON.stringify(data.filter) || '',
        })}`,
    }),

    createCloudStorageSettings: builder.mutation<
      ICreateCloudStorageSettingsResponse,
      ICreateCloudStorageSettingsRequest
    >({
      query: (data) => {
        return {
          url: `/cloud-storage`,
          method: 'POST',
          body: data.body,
        };
      },
    }),

    updateCloudStorageSettings: builder.mutation<
      { result: ICloudStorageSettings },
      IUpdateCloudStorageSettingsRequest
    >({
      query: ({ id, body }) => {
        return {
          url: `cloud-storage/${id}`,
          method: 'PATCH',
          body,
        };
      },
    }),

    deleteCloudStorageSettings: builder.mutation<
      IDeleteCloudStorageSettingsResponse,
      { id: string }
    >({
      query: (data) => {
        return {
          url: `cloud-storage/${data.id}`,
          method: 'DELETE',
        };
      },
    }),
  };
};
