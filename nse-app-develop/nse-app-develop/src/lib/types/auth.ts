import { IUser } from './user';

export interface ISigninRequest {
  email: string;
  password: string;
}

export interface IVerifyEmailRequest {
  code: string;
  email: string;
}

export interface IVerifyPhoneRequest {
  code: string;
  phone: string;
}

export interface ISignupRequest {
  password: string;
  email: string;
  captcha: {
    captcha_id: string;
    captcha_ans: string;
  };
}

export interface ISigninResponse extends IUser {
  token: string;
  refreshToken: string;
}

export interface ISignupResponse {
  message: string;
  status: string;
}

export interface IResetPasswordRequest {
  email: string;
  code: string;
  password: string;
}

export interface IGetCaptchaResponse {
  id: string;
  captcha: string;
}

//verify phone
export interface ISendPhoneVerifyOtpRequest {
  dialCode: string;
  phoneNumber: string;
}

export interface ISendPhoneVerifyOtpResponse {
  message: string;
}

export interface IVerifyPhoneNumberRequest {
  dialCode: string;
  phoneNumber: string;
  otp: string;
}

export interface IVerifyPhoneNumberResponse {
  message: string;
}
