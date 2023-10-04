import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { IListRequest, IListResponse } from '../types';
import {
  ICreateNotificationsSettingsRequest,
  IDeleteNotificationsSettingsResponse,
  IGetNotificationsSettingsRequest,
  INotificationsSettings,
  IUpdateNotificationsSettingsRequest,
} from '../types/notifications-settings';
import { objToQueryParams } from '../utils/helper';

export const notificationsSettingsEndpoints = (
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
    listNotificationsSettings: builder.mutation<
      IListResponse<INotificationsSettings>,
      IListRequest
    >({
      query: (data) =>
        `notifications-settings?${objToQueryParams({
          page: data.page || 1,
          limit: data.limit || 10,
          fields: encodeURIComponent(data.fields || ''),
          filter: JSON.stringify(data.filter) || '',
        })}`,
    }),

    getNotificationsSettings: builder.mutation<
      { result: INotificationsSettings },
      IGetNotificationsSettingsRequest
    >({
      query: (data) =>
        `notifications-settings/${data.id}?${objToQueryParams({
          fields: data.fields || '',
        })}`,
    }),

    createNotificationsSetting: builder.mutation<
      { result: INotificationsSettings },
      ICreateNotificationsSettingsRequest
    >({
      query: (data) => {
        return {
          url: `notifications-settings`,
          method: 'POST',
          body: data,
        };
      },
    }),

    updateNotificationsSetting: builder.mutation<
      { result: INotificationsSettings },
      IUpdateNotificationsSettingsRequest
    >({
      query: ({ id, body }) => {
        return {
          url: `notifications-settings/${id}`,
          method: 'PATCH',
          body,
        };
      },
    }),

    deleteNotificationsSetting: builder.mutation<
      IDeleteNotificationsSettingsResponse,
      { id: string }
    >({
      query: (data) => {
        return {
          url: `notifications-settings/${data.id}`,
          method: 'DELETE',
        };
      },
    }),
  };
};
