import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import {
  ICreateProverDetailsRequest,
  IListRequest,
  IListResponse,
  IProvider,
  IProviderGroup,
  IUpdateProviderDetailsRequest,
} from '../types';
import { objToQueryParams } from '../utils/helper';

export const providerDetailsEndpoints = (
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
    listProviderDetails: builder.mutation<
      IListResponse<IProviderGroup>,
      IListRequest
    >({
      query: (data) =>
        `provider-details?${objToQueryParams({
          page: data.page || 1,
          limit: data.limit || 10,
          fields: encodeURIComponent(data.fields || ''),
          filter: JSON.stringify(data.filter) || '',
        })}`,
    }),

    addProviderDetails: builder.mutation<
      { result: IProvider },
      ICreateProverDetailsRequest
    >({
      query: (data) => {
        return {
          url: `provider-details`,
          method: 'POST',
          body: data,
        };
      },
    }),

    updateProviderDetails: builder.mutation<
      { result: IProvider },
      Partial<IUpdateProviderDetailsRequest> &
        Pick<IUpdateProviderDetailsRequest, 'id'>
    >({
      query: ({ id, ...patch }) => {
        return {
          url: `provider-details/${id}`,
          method: 'PATCH',
          body: {
            ...patch.body,
          },
        };
      },
    }),
  };
};
