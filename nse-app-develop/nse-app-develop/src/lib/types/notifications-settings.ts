export interface INotificationsSettings {
  _id: string;
  maxNotifications: number;
  domain: string;
  email?: string;
  notifyEmails: string[];
  isActive: boolean;
  isNotifySender: boolean;
  description: string;
  comments?: string;
  createdAt: string;
  updatedAt: string;
}

export interface IGetNotificationsSettingsRequest {
  id: string;
  fields?: string;
}

export interface ICreateNotificationsSettingsRequest {
  maxNotifications: number;
  domain: string;
  email?: string;
  notifyEmails: string[];
  isActive: boolean;
  isNotifySender: boolean;
  comments: string;
}

export interface IUpdateNotificationsSettingsRequestBody {
  maxNotifications?: number;
  domain?: string;
  email?: string;
  notifyEmails?: string[];
  isActive?: boolean;
  isNotifySender?: boolean;
  description?: string;
  comments?: string;
}

export interface IUpdateNotificationsSettingsRequest {
  id: string;
  body: IUpdateNotificationsSettingsRequestBody;
}

export interface IDeleteNotificationsSettingsResponse {
  status: string;
  id: string;
}
