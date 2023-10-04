import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import {
  IEmailReport,
  IExportToCsvRequest,
  IExportToCsvResponse,
  IListRequest,
  IListResponse,
  ISearchRequest,
} from '../types';
import { objToQueryParams } from '../utils/helper';

export const notificationsMontorEndpoints = (
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
    listNotificationsMonitor: builder.mutation<
      IListResponse<IEmailReport>,
      IListRequest
    >({
      query: (data) =>
        `notifications-monitor?${objToQueryParams({
          page: data.page || 1,
          limit: data.limit || 10,
          fields: data.fields || '',
          ...(data?.filter && {
            filter: encodeURIComponent(JSON.stringify(data?.filter)) || '',
          }),
          ...(data?.fromDuration && {
            fromDuration: data.fromDuration,
          }),
          ...(data?.toDuration && {
            toDuration: data.toDuration,
          }),
        })}`,
    }),

    searchNotificationReports: builder.mutation<
      IListResponse<IEmailReport>,
      ISearchRequest
    >({
      query: (data) =>
        `notifications-monitor/search?${objToQueryParams({
          page: data.page || 1,
          limit: data.limit || 10,
          q: data.q,
          filter: encodeURIComponent(JSON.stringify(data?.filter)) || '',
        })}`,
    }),

    exportNotificationReportsToCsv: builder.mutation<
      IExportToCsvResponse,
      IExportToCsvRequest
    >({
      query: (data) => {
        return {
          url: `notifications-monitor/export-csv`,
          body: data,
          method: 'POST',
        };
      },
    }),

    exportSearchedNotificationReports: builder.mutation<
      IExportToCsvResponse,
      { q: string; fields: string }
    >({
      query: (data) =>
        `notifications-monitor/search-export-csv?${objToQueryParams({
          q: data.q,
          fields: data.fields,
        })}`,
    }),
  };
};
