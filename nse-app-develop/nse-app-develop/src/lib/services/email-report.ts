import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import {
  IEmailReport,
  IExportToCloudStorageRequest,
  IExportToCsvRequest,
  IExportToCsvResponse,
  IGetEmailReportsRequest,
  IListRequest,
  IListResponse,
  ISearchRequest,
} from '../types';
import { objToQueryParams } from '../utils/helper';

export const emailReportEndpoints = (
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
    listEmailReports: builder.mutation<
      IListResponse<IEmailReport>,
      IListRequest
    >({
      query: (data) =>
        `email-reports?${objToQueryParams({
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

    getEmailReports: builder.mutation<
      { result: IEmailReport },
      IGetEmailReportsRequest
    >({
      query: (data) =>
        `email-reports/${data.id}?${objToQueryParams({
          fields: data.fields || '',
        })}`,
    }),

    exportToCloudStorage: builder.mutation<
      { message: string },
      IExportToCloudStorageRequest
    >({
      query: (data) => {
        return {
          url: `email-reports/export`,
          body: data,
          method: 'POST',
        };
      },
    }),

    exportEmailReportsToCsv: builder.mutation<
      IExportToCsvResponse,
      IExportToCsvRequest
    >({
      query: (data) => {
        return {
          url: `email-reports/export-csv`,
          body: data,
          method: 'POST',
        };
      },
    }),

    searchEmailReports: builder.mutation<
      IListResponse<IEmailReport>,
      ISearchRequest
    >({
      query: (data) =>
        `email-reports/search?${objToQueryParams({
          page: data.page || 1,
          limit: data.limit || 10,
          q: data.q,
        })}`,
    }),

    exportSearchedEmailReports: builder.mutation<
      IExportToCsvResponse,
      { q: string; fields: string }
    >({
      query: (data) =>
        `email-reports/search-export-csv?${objToQueryParams({
          q: data.q,
          fields: data.fields,
        })}`,
    }),
  };
};
