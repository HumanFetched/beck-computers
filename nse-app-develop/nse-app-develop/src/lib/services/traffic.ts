import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { IRequestTraffic, IStatusTraffic } from '../types/traffic';
import { objToQueryParams } from '../utils/helper';

export const trafficEndpoints = (
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
    listTraffic: builder.mutation<{ results: IStatusTraffic }, IRequestTraffic>(
      {
        query: (data) =>
          `traffic/deliverability?${objToQueryParams({
            fromDuration: data.fromDuration,
            toDuration: data.toDuration,
          })}`,
      },
    ),
  };
};
