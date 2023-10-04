import {
  PROVIDER_GROUP_CONFIG_FEATURE_KEY,
  providerGroupConfigReducer,
} from './groupConfig/groupConfig.slice';
import { domainReducer, DOMAIN_FEATURE_KEY } from './domain/domain.slice';
import { apiKeyReducer, API_KEYS_FEATURE_KEY } from './apiKeys/apiKeys.slice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { userReducer, USER_FEATURE_KEY } from './user/user.slice';
import { nseApi } from '../services';
import {
  PROVIDER_GROUPS_FEATURE_KEY,
  providerGroupsReducer,
} from './providerGroups/providerGroups.slice';
import {
  emailProvidersReducer,
  EMAIL_PROVIDERS_FEATURE_KEY,
} from './emailProviders/emailProviders.slice';
import {
  webhookReducer,
  WEBHOOKS_FEATURE_KEY,
} from './webhooks/webhooks.slice';
import {
  notificationsSettingsReducer,
  NOTIFICATIONS_SETTINGS_FEATURE_KEY,
} from './notificationsSettings/notificationsSettings.slice';
import {
  emailReportReducer,
  EMAIL_REPORTS_FEATURE_KEY,
} from './emailReports/emailReports.slice';
import {
  CLOUD_STORAGES_SETTINGS_FEATURE_KEY,
  cloudStoragesSettingsReducer,
} from './cloudStoragesSettings/cloudStoragesSettings.slice';
import {
  notificationsMonitorReducer,
  NOTIFICATIONS_MONITOR_FEATURE_KEY,
} from './notificationsMonitor/notificationsMonitor.slice';
import { trafficReducer, TRAFFIC_FEATURE_KEY } from './traffic/traffic.slice';

export const webappStore = configureStore({
  reducer: {
    [USER_FEATURE_KEY]: userReducer,
    [DOMAIN_FEATURE_KEY]: domainReducer,
    [PROVIDER_GROUPS_FEATURE_KEY]: providerGroupsReducer,
    [EMAIL_PROVIDERS_FEATURE_KEY]: emailProvidersReducer,
    [PROVIDER_GROUP_CONFIG_FEATURE_KEY]: providerGroupConfigReducer,
    [nseApi.reducerPath]: nseApi.reducer,
    [API_KEYS_FEATURE_KEY]: apiKeyReducer,
    [WEBHOOKS_FEATURE_KEY]: webhookReducer,
    [NOTIFICATIONS_SETTINGS_FEATURE_KEY]: notificationsSettingsReducer,
    [EMAIL_REPORTS_FEATURE_KEY]: emailReportReducer,
    [CLOUD_STORAGES_SETTINGS_FEATURE_KEY]: cloudStoragesSettingsReducer,
    [NOTIFICATIONS_MONITOR_FEATURE_KEY]: notificationsMonitorReducer,
    [TRAFFIC_FEATURE_KEY]: trafficReducer,
  },
  // Additional middleware can be passed to this array
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(nseApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
  // Optional Redux store enhancers
  enhancers: [],
});

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof webappStore.dispatch;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type WebAppRootState = ReturnType<typeof webappStore.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<WebAppRootState> =
  useSelector;

// export all slices below this
export * from './user/user.slice';
export * from './domain/domain.slice';
export * from './providerGroups/providerGroups.slice';
export * from './emailProviders/emailProviders.slice';
export * from './groupConfig/groupConfig.slice';
export * from './apiKeys/apiKeys.slice';
export * from './webhooks/webhooks.slice';
export * from './notificationsSettings/notificationsSettings.slice';
export * from './emailReports/emailReports.slice';
export * from './cloudStoragesSettings/cloudStoragesSettings.slice';
export * from './notificationsMonitor/notificationsMonitor.slice';
