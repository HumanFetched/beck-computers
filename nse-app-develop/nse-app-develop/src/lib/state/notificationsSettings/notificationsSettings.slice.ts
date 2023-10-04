import { nseApi } from '../../services/index';
import {
  createEntityAdapter,
  createSlice,
  EntityState,
} from '@reduxjs/toolkit';
import { WebAppRootState } from '..';
import { INotificationsSettings } from '../../types/notifications-settings';

export const NOTIFICATIONS_SETTINGS_FEATURE_KEY = 'notificationsSettings';

/*
 * Update these interfaces according to your requirements.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface notificationsSettingsEntity extends INotificationsSettings {}

export interface notificationsSettingsState
  extends EntityState<notificationsSettingsEntity> {
  isLoading: boolean;
  error: string | undefined;
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

export const notificationsSettingsAdapter =
  createEntityAdapter<notificationsSettingsEntity>({
    selectId: (notification) => notification._id,
    sortComparer: (a, b) => {
      if (a.createdAt && b.createdAt)
        return b.createdAt.localeCompare(a.createdAt);
      else return 0;
    },
  });

export const initialNotificationState: notificationsSettingsState =
  notificationsSettingsAdapter.getInitialState({
    isLoading: false,
    error: undefined,
    totalDocs: 0,
    page: 1,
    limit: 10,
    totalPages: 0,
    pagingCounter: 0,
    hasPrevPage: false,
    hasNextPage: false,
    prevPage: 0,
    nextPage: 0,
  });

export const notificationsSettingsSlice = createSlice({
  name: NOTIFICATIONS_SETTINGS_FEATURE_KEY,
  initialState: initialNotificationState,
  reducers: {
    reset: () => initialNotificationState,
  },
  extraReducers: (builder) => {
    // add apikey
    builder.addMatcher(
      nseApi.endpoints.createNotificationsSetting.matchPending,
      (state) => {
        state.isLoading = true;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.createNotificationsSetting.matchFulfilled,
      (state) => {
        state.isLoading = false;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.createNotificationsSetting.matchRejected,
      (state) => {
        state.isLoading = false;
      },
    );

    // list apikeys
    builder.addMatcher(
      nseApi.endpoints.listNotificationsSettings.matchPending,
      (state) => {
        state.isLoading = true;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.listNotificationsSettings.matchFulfilled,
      (state, { payload }) => {
        notificationsSettingsAdapter.removeAll(state);
        notificationsSettingsAdapter.addMany(state, payload.results);
        state.isLoading = false;
        state.error = '';
        state.totalDocs = payload.totalDocs;
        state.limit = payload.limit;
        state.page = payload.page;
        state.totalPages = payload.totalPages;
        state.pagingCounter = payload.pagingCounter;
        state.hasNextPage = payload.hasNextPage;
        state.hasPrevPage = payload.hasPrevPage;
        state.prevPage = payload.prevPage;
        state.nextPage = payload.nextPage;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.listNotificationsSettings.matchRejected,
      (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      },
    );

    // Delete apikey
    builder.addMatcher(
      nseApi.endpoints.deleteNotificationsSetting.matchPending,
      (state) => {
        state.isLoading = true;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.deleteNotificationsSetting.matchFulfilled,
      (state) => {
        state.isLoading = false;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.deleteNotificationsSetting.matchRejected,
      (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      },
    );

    // Update apikey
    builder.addMatcher(
      nseApi.endpoints.updateNotificationsSetting.matchPending,
      (state) => {
        state.isLoading = true;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.updateNotificationsSetting.matchFulfilled,
      (state, { payload }) => {
        state.isLoading = false;
        notificationsSettingsAdapter.updateOne(state, {
          id: payload.result._id,
          changes: payload.result,
        });
      },
    );
    builder.addMatcher(
      nseApi.endpoints.updateNotificationsSetting.matchRejected,
      (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      },
    );
  },
});

/*
 * Export reducer for store configuration.
 */
export const notificationsSettingsReducer = notificationsSettingsSlice.reducer;

export const notificationsSettingsActions = notificationsSettingsSlice.actions;
export const notificationsSettingsSelector =
  notificationsSettingsAdapter.getSelectors(
    (state: WebAppRootState) => state.notificationsSettings,
  );
