import { USER_REFRESH_KEY, USER_TOKEN_KEY } from './../utils/constants/index';
import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';
import { authEndpoints } from './auth';
import { userEndpoints } from './user';
import { domainEndpoints } from './domain';
import { apiKeyEndpoints } from './api-key';
import { userActions } from '../state';
import { setUserTokens } from '../utils/helper';
import jwtDecode from 'jwt-decode';
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { providerGroupsEndpoints } from './provider-groups';
import { providerDetailsEndpoints } from './provider-details';
import { emailProviderEndpoints } from './email-provider';
import { webhookEndpoints } from './webhook';
import { notificationsSettingsEndpoints } from './notifications-settings';
import { cloudStoragesSettingsEndpoints } from './cloud-storages-settings';
import { emailReportEndpoints } from './email-report';
import { notificationsMontorEndpoints } from './notifications-monitor';
import { trafficEndpoints } from './traffic';
import { dashboardEndpoints } from './dashboard';

interface IRefreshResponse {
  idToken: string;
  refreshToken: string;
}

const isTokenValid = (accessToken: string | null) => {
  if (!accessToken) return true;
  try {
    const { exp } = jwtDecode<{ exp: number }>(accessToken);
    return Date.now() <= exp * 1000;
  } catch (error) {
    return false;
  }
};

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.REACT_APP_BASE_SERVICE_URL}/api/v1`,
  prepareHeaders: async (headers) => {
    const token = localStorage.getItem(USER_TOKEN_KEY);
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  // eslint-disable-next-line @typescript-eslint/ban-types
  {},
  FetchBaseQueryMeta
> = async (args, api, extraOptions) => {
  const token = localStorage.getItem(USER_TOKEN_KEY);
  const refreshToken = localStorage.getItem(USER_REFRESH_KEY);
  let result: QueryReturnValue<
    unknown,
    FetchBaseQueryError,
    FetchBaseQueryMeta
  >;
  if (isTokenValid(token)) {
    result = await baseQuery(args, api, extraOptions);
  } else {
    // send refresh token to get new access token
    const refreshResult = await baseQuery(
      {
        url: 'auth/refresh',
        method: 'POST',
        body: {
          refreshToken,
        },
      },
      api,
      extraOptions,
    );
    if (refreshResult?.data) {
      const { idToken, refreshToken } = refreshResult.data as IRefreshResponse;
      // store new tokens in local storage
      setUserTokens({ token: idToken, refreshToken });
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(userActions.reset());
      window.location.pathname = 'user/signin';
      result = await baseQuery(args, api, extraOptions);
    }
  }
  if (result?.error && result?.error?.status === 401)
    window.location.pathname = 'user/signin';
  return result;
};

export const nseApi = createApi({
  reducerPath: 'nseApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    ...userEndpoints(builder),
    ...authEndpoints(builder),
    ...domainEndpoints(builder),
    ...providerGroupsEndpoints(builder),
    ...providerDetailsEndpoints(builder),
    ...emailProviderEndpoints(builder),
    ...apiKeyEndpoints(builder),
    ...webhookEndpoints(builder),
    ...notificationsSettingsEndpoints(builder),
    ...cloudStoragesSettingsEndpoints(builder),
    ...emailReportEndpoints(builder),
    ...notificationsMontorEndpoints(builder),
    ...trafficEndpoints(builder),
    ...dashboardEndpoints(builder),
  }),
});

// user endpoints
export const { useAuthUserMutation, useUpdateUserMutation } = nseApi;

// auth endpoints
export const {
  useSignupMutation,
  useSigninMutation,
  useVerifyEmailMutation,
  useResendEmailVerificationMutation,
  useSendForgotPasswordCodeMutation,
  useResetPasswordMutation,
  useGetCaptchaMutation,
  useSendPhoneNumberVerifyOtpMutation,
  useVerifyPhoneNumberMutation,
} = nseApi;

// domain endpoints
export const { useListDomainsMutation, useCreateDomainMutation } = nseApi;

// provider groups
export const {
  useListProviderGroupsMutation,
  useDeleteProviderGroupMutation,
  useCreateProviderGroupMutation,
  useUpdateProviderGroupMutation,
  useGetProviderGroupMutation,
  useAddProviderInGroupMutation,
  useRemoveProviderFromGroupMutation,
} = nseApi;

// email providers
export const { useListEmailProvidersMutation } = nseApi;

// provider details
export const {
  useListProviderDetailsMutation,
  useAddProviderDetailsMutation,
  useUpdateProviderDetailsMutation,
} = nseApi;

// api-keys endpoints
export const { useListApiKeysMutation, useCreateApiKeyMutation } = nseApi;

// webhook endpoints
export const { useListWebhooksMutation, useCreateWebhookMutation } = nseApi;

// email report endpoints
export const {
  useListEmailReportsMutation,
  useGetEmailReportsMutation,
  useSearchEmailReportsMutation,
  useExportSearchedEmailReportsMutation,
} = nseApi;

// reports cloud platfroms endpoints
export const {
  useListCloudStoragesSettingsMutation,
  useCreateCloudStorageSettingsMutation,
} = nseApi;

// notifications monitor endpoints
export const {
  useListNotificationsMonitorMutation,
  useSearchNotificationReportsMutation,
} = nseApi;

// traffic endpoints
export const { useListTrafficMutation } = nseApi;
