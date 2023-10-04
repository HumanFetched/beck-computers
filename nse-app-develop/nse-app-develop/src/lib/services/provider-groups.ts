import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import {
  IAddRemoveProviderInGroupResponse,
  IAddRemoveProviderInGroupRequest,
  ICreateProviderRequest,
  IDeleteProviderGroupResponse,
  IGetProviderGroupRequest,
  IListRequest,
  IListResponse,
  IProviderGroup,
  IUpdateProviderGroupRequest,
  IAddRemoveDomainInGroupRequest,
  ISearchProviderGroup,
} from '../types';
import { objToQueryParams } from '../utils/helper';

export const providerGroupsEndpoints = (
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
    createProviderGroup: builder.mutation<
      { result: IProviderGroup },
      ICreateProviderRequest
    >({
      query: (data) => {
        return {
          url: `provider-groups`,
          method: 'POST',
          body: data,
        };
      },
    }),

    listProviderGroups: builder.mutation<
      IListResponse<IProviderGroup>,
      IListRequest
    >({
      query: (data) =>
        `provider-groups?${objToQueryParams({
          page: data.page || 1,
          limit: data.limit || 10,
          fields: data.fields || '',
          filter: JSON.stringify(data.filter) || '',
        })}`,
    }),

    deleteProviderGroup: builder.mutation<
      IDeleteProviderGroupResponse,
      { id: string }
    >({
      query: (data) => {
        return {
          url: `provider-groups/${data.id}`,
          method: 'DELETE',
        };
      },
    }),

    updateProviderGroup: builder.mutation<
      { result: IProviderGroup },
      IUpdateProviderGroupRequest
    >({
      query: ({ id, ...patch }) => {
        return {
          url: `provider-groups/${id}`,
          method: 'PATCH',
          body: {
            ...patch.body,
          },
        };
      },
    }),

    getProviderGroup: builder.mutation<
      { result: IProviderGroup },
      IGetProviderGroupRequest
    >({
      query: (data) =>
        `provider-groups/${data.id}?${objToQueryParams({
          fields: encodeURIComponent(data.fields || ''),
        })}`,
    }),

    addProviderInGroup: builder.mutation<
      { result: IAddRemoveProviderInGroupResponse },
      IAddRemoveProviderInGroupRequest
    >({
      query: (data) => {
        return {
          url: `provider-groups/${data.groupId}/add-provider`,
          method: 'PATCH',
          body: {
            provider: data.provider,
          },
        };
      },
    }),

    removeProviderFromGroup: builder.mutation<
      { result: IAddRemoveProviderInGroupResponse },
      IAddRemoveProviderInGroupRequest
    >({
      query: (data) => {
        return {
          url: `provider-groups/${data.groupId}/remove-provider`,
          method: 'DELETE',
          body: {
            provider: data.provider,
          },
        };
      },
    }),

    addDomainToGroup: builder.mutation<
      { result: IAddRemoveProviderInGroupResponse },
      IAddRemoveDomainInGroupRequest
    >({
      query: (data) => {
        return {
          url: `provider-groups/${data.groupId}/add-domain`,
          method: 'PATCH',
          body: {
            domain: data.domainId,
          },
        };
      },
    }),

    removeDomainFromGroup: builder.mutation<
      { result: IAddRemoveProviderInGroupResponse },
      IAddRemoveDomainInGroupRequest
    >({
      query: (data) => {
        return {
          url: `provider-groups/${data.groupId}/remove-domain`,
          method: 'PATCH',
          body: {
            domain: data.domainId,
          },
        };
      },
    }),

    searchProviderGroup: builder.mutation<
      IListResponse<IProviderGroup>,
      ISearchProviderGroup
    >({
      query: (data) => {
        return {
          url: `provider-groups/search?page=${data.page}&q=${data.q}&limit=${data.limit}`,
        };
      },
    }),
  };
};
