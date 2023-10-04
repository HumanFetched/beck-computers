import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import {
  IGetCaptchaResponse,
  IResetPasswordRequest,
  ISendPhoneVerifyOtpRequest,
  ISendPhoneVerifyOtpResponse,
  ISigninRequest,
  ISigninResponse,
  ISignupRequest,
  ISignupResponse,
  IVerifyEmailRequest,
  IVerifyPhoneNumberRequest,
  IVerifyPhoneNumberResponse,
} from '../types';

export const authEndpoints = (
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
    signup: builder.mutation<ISignupResponse, ISignupRequest>({
      query: (data) => {
        return {
          url: `auth/register`,
          body: data,
          method: 'POST',
        };
      },
    }),

    signin: builder.mutation<ISigninResponse, ISigninRequest>({
      query: (data) => {
        return {
          url: `auth/login`,
          body: data,
          method: 'POST',
        };
      },
    }),

    verifyEmail: builder.mutation<{ message: string }, IVerifyEmailRequest>({
      query: (data) => {
        return {
          url: `auth/confirm-account`,
          body: data,
          method: 'POST',
        };
      },
    }),

    resendEmailVerification: builder.mutation<
      { status: string },
      { email: string }
    >({
      query: (data) => {
        return {
          url: `auth/resend-confirmation-code`,
          body: data,
          method: 'POST',
        };
      },
    }),

    sendForgotPasswordCode: builder.mutation<
      { message: string },
      { email: string }
    >({
      query: (data) => {
        return {
          url: `auth/reset-code`,
          body: data,
          method: 'POST',
        };
      },
    }),

    resetPassword: builder.mutation<{ message: string }, IResetPasswordRequest>(
      {
        query: (data) => {
          return {
            url: `auth/reset-password`,
            body: data,
            method: 'POST',
          };
        },
      },
    ),

    getCaptcha: builder.mutation<IGetCaptchaResponse, void>({
      query: () => 'auth/captcha',
    }),

    // verify phone number
    sendPhoneNumberVerifyOtp: builder.mutation<
      ISendPhoneVerifyOtpResponse,
      ISendPhoneVerifyOtpRequest
    >({
      query: (data) => {
        return {
          url: `sms/send-otp`,
          method: 'POST',
          body: data,
        };
      },
    }),
    verifyPhoneNumber: builder.mutation<
      IVerifyPhoneNumberResponse,
      IVerifyPhoneNumberRequest
    >({
      query: (data) => {
        return {
          url: `sms/verify-otp`,
          method: 'POST',
          body: data,
        };
      },
    }),
  };
};
