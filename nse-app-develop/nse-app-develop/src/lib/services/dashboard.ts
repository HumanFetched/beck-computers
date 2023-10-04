import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import {
  IHourlyMails,
  IRejectTypesResponse,
  ITotalCountResponse,
} from '../types';
import { IRequestTraffic } from '../types/traffic';
import { objToQueryParams } from '../utils/helper';

export const dashboardEndpoints = (
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
    getTotalCounts: builder.mutation<
      { results: ITotalCountResponse[] },
      IRequestTraffic
    >({
      query: (data) =>
        `dashboard/widget/total-count?${objToQueryParams({
          fromDuration: data.fromDuration,
          toDuration: data.toDuration,
        })}`,
    }),
    getHourlyMails: builder.mutation<
      { results: IHourlyMails[] },
      IRequestTraffic
    >({
      query: (data) =>
        `dashboard/widget/hourly-mails?${objToQueryParams({
          fromDuration: data.fromDuration,
          toDuration: data.toDuration,
        })}`,
    }),
    getRejectTypes: builder.mutation<
      { results: IRejectTypesResponse[] },
      IRequestTraffic
    >({
      query: (data) =>
        `dashboard/widget/reject-type?${objToQueryParams({
          fromDuration: data.fromDuration,
          toDuration: data.toDuration,
        })}`,
    }),
  };
};
