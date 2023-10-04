import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { IEmailProvider, IListRequest, IListResponse } from '../types';
import { objToQueryParams } from '../utils/helper';

export const emailProviderEndpoints = (
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
    listEmailProviders: builder.mutation<
      IListResponse<IEmailProvider>,
      IListRequest
    >({
      query: (data) =>
        `email-providers?${objToQueryParams({
          page: data.page || 1,
          limit: data.limit || 10,
          fields: encodeURIComponent(data.fields || ''),
          filter: JSON.stringify(data.filter) || '',
        })}`,
    }),
  };
};
