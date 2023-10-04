export interface IWebhookConfigurations {
  isDelivered: boolean;
  isBounced: boolean;
  isDropped: boolean;
  isFailed: boolean;
  isDeferred: boolean;
  isSpammed: boolean;
}
export interface IWebhook {
  _id: string;
  name: string;
  accountId?: string;
  description?: string;
  provider: string;
  isActive: boolean;
  configurations?: IWebhookConfigurations;
  createdAt: string;
  updatedAt: string;
}
export interface IGetWebhookRequest {
  id: string;
  fields?: string;
}

export interface ICreateWebhookRequest {
  name: string;
  accountId?: string;
  provider: string;
  description?: string;
  isActive?: boolean;
  configurations?: IWebhookConfigurations;
}

export interface IUpdateWebhookRequest {
  id: string;
  body: {
    name?: string;
    accountId?: string;
    provider?: string;
    description?: string;
    isActive?: boolean;
    configurations?: IWebhookConfigurations;
  };
}

export interface IDeleteWebhookResponse {
  status: string;
  id: string;
}

export interface IRequestCaptureResponse {
  captureTime: string;
  webhookId: string;
}
