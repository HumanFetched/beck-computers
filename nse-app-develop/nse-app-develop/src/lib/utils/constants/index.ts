import { ICloudStorageTypes } from '../../types';
import { ConnectionType } from './../../types/common-types';

export const PASSWORD_MAX_LENGTH = 8;

export const USER_TOKEN_KEY = 'nseTk';
export const USER_REFRESH_KEY = 'nseRTk';

export const LOGO_125x125 =
  'https://nse-media.s3.amazonaws.com/images/logo/nse-logo.ico';

export const MEDIA_CDN_PREFIX = 'https://nse-media.s3.amazonaws.com';

export const TOAST_ACTION = {
  UPDATE_USER: 'UPDATE_USER',
};

export const SECONDARY_COLOR = '#D92363';

export const CONNECTION_TYPES = {
  API: 'API',
  SMTP: 'SMTP',
};

export const PROVIDER_SCHEMA_MAP: Record<
  ConnectionType,
  'apiSchema' | 'smtpSchema'
> = {
  API: 'apiSchema',
  SMTP: 'smtpSchema',
};

export const CLOUD_STORAGES: { [key: string]: ICloudStorageTypes } = {
  GOOGLE_DRIVE: 'GOOGLE_DRIVE',
  DROPBOX: 'DROPBOX',
};

export const CLOUD_STORAGES_OPTIONS = {
  GOOGLE_DRIVE: 'Google drive',
  DROPBOX: 'Dropbox',
};

export const WEBHOOK_EVENTS: { [key: string]: string } = {
  isDelivered: 'Delivered',
  isBounced: 'Bounced',
  isDropped: 'Dropped',
  isFailed: 'Failed',
  isDeferred: 'Deferred',
  isSpammed: 'Spammed',
};

export const outh2RedirectUri = `${process.env.REACT_APP_BASE_URL}/email-reports`;

export const googleDriveOuth2Url = `https://accounts.google.com/o/oauth2/v2/auth?scope=openid%20profile%20email%20https://www.googleapis.com/auth/drive&access_type=offline&response_type=code&prompt=consent&client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}`;

export const dropboxOuth2Url = `https://www.dropbox.com/oauth2/authorize?client_id=${process.env.REACT_APP_DROPBOX_CLIENT_ID}&token_access_type=offline&response_type=code&scope=account_info.read%20file_requests.read%20file_requests.write%20files.content.write%20files.metadata.read%20files.metadata.write%20openid%20email`;

export const TRAFFIC_DURATION = {
  twentyFourHour: '24H',
  sevenDays: '7D',
  oneMonth: '1M',
  threeMonth: '3M',
  custom: 'C',
};

export const statusBorderColor: { [key: string]: string } = {
  delivered: '#22c55e',
  bounce: '#eab308',
  failed: '#f43f5e',
};
