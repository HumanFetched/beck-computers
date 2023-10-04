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
  ICreateWebhookRequest,
  IUpdateWebhookRequest,
  IDeleteWebhookResponse,
  IWebhook,
  IGetWebhookRequest,
  IEmailReport,
  IRequestCaptureResponse,
} from '../types';
import { objToQueryParams } from '../utils/helper';

export const webhookEndpoints = (
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
    listWebhooks: builder.mutation<IListResponse<IWebhook>, IListRequest>({
      query: (data) =>
        `webhooks?${objToQueryParams({
          page: data.page || 1,
          limit: data.limit || 10,
          fields: encodeURIComponent(data.fields || ''),
          filter: JSON.stringify(data.filter) || '',
        })}`,
    }),

    getWebhook: builder.mutation<{ result: IWebhook }, IGetWebhookRequest>({
      query: (data) =>
        `webhooks/${data.id}?${objToQueryParams({
          fields: data.fields || '',
        })}`,
    }),

    createWebhook: builder.mutation<
      { result: IWebhook },
      ICreateWebhookRequest
    >({
      query: (data) => {
        return {
          url: `webhooks`,
          method: 'POST',
          body: data,
        };
      },
    }),

    updateWebhook: builder.mutation<
      { result: IWebhook },
      IUpdateWebhookRequest
    >({
      query: ({ id, body }) => {
        return {
          url: `webhooks/${id}`,
          method: 'PATCH',
          body,
        };
      },
    }),

    deleteWebhook: builder.mutation<IDeleteWebhookResponse, { id: string }>({
      query: (data) => {
        return {
          url: `webhooks/${data.id}`,
          method: 'DELETE',
        };
      },
    }),

    captureResponse: builder.mutation<
      { result: IEmailReport },
      IRequestCaptureResponse
    >({
      query: (data) =>
        `webhooks/capture-response?${objToQueryParams({
          captureTime: data.captureTime || '',
          webhookId: data.webhookId || '',
        })}`,
    }),
  };
};
