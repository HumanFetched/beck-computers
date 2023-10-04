import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { IUser } from '../types';

export const userEndpoints = (
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
    authUser: builder.mutation<IUser, { _id?: string }>({
      query: () => `users/me`,
    }),

    updateUser: builder.mutation<{ user: IUser }, Partial<IUser>>({
      query: (data) => {
        return {
          url: `users`,
          method: 'PATCH',
          body: data,
        };
      },
    }),
  };
};
