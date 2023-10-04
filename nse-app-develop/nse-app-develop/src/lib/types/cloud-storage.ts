export interface ICloudStorageFormSchema {
  id: string;
  label: string;
  name: string;
  initialValue?: string | boolean;
  type: string;
  isRequired?: boolean;
  placeholder?: string;
  toggle?: {
    label: string;
    type: string;
    initialValue: boolean;
  };
}

export interface IGoogleDriveData {
  refreshToken: string;
}

export interface ICloudStorageSettings {
  _id: string;
  name: ICloudStorageTypes;
  cloudStorageName: ICloudStorageTypes;
  email?: string;
  data: IGoogleDriveData;
  isActive: boolean;
  createdAt: string;
}

export type ICloudStorageTypes = 'GOOGLE_DRIVE' | 'DROPBOX';

export interface ICreateCloudStorageSettingsRequest {
  body: {
    name: string;
    cloudStorageName: ICloudStorageTypes;
    email: string;
    data: IGoogleDriveData;
    isActive: boolean;
  };
}

export interface ICreateCloudStorageSettingsResponse {
  result: ICloudStorageSettings;
}

export interface IUpdateCloudStorageSettingsRequestBody {
  name?: string;
  data?: IGoogleDriveData;
  isActive?: boolean;
}

export interface IUpdateCloudStorageSettingsRequest {
  id: string;
  body: IUpdateCloudStorageSettingsRequestBody;
}

export interface IDeleteCloudStorageSettingsResponse {
  status: string;
  id: string;
}

export interface ITokenResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
  account_id?: string;
  uid?: string;
  id_token?: string;
}
