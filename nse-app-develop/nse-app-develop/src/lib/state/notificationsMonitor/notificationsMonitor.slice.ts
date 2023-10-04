import { nseApi } from '../../services/index';
import {
  createEntityAdapter,
  createSlice,
  EntityState,
} from '@reduxjs/toolkit';
import { IEmailReport } from '../../types';
import { WebAppRootState } from '..';

export const NOTIFICATIONS_MONITOR_FEATURE_KEY = 'notificationsMonitor';

/*
 * Update these interfaces according to your requirements.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface notificationsMonitorEntity extends IEmailReport {}

export interface notificationsMonitorState
  extends EntityState<notificationsMonitorEntity> {
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

export const notificationsMonitorAdapter =
  createEntityAdapter<notificationsMonitorEntity>({
    selectId: (report) => report._id,
    sortComparer: (a, b) => {
      if (a.createdAt && b.createdAt)
        return b.createdAt.localeCompare(a.createdAt);
      else return 0;
    },
  });

export const initialNotificationsMonitorState: notificationsMonitorState =
  notificationsMonitorAdapter.getInitialState({
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

export const notificationsMonitorSlice = createSlice({
  name: NOTIFICATIONS_MONITOR_FEATURE_KEY,
  initialState: initialNotificationsMonitorState,
  reducers: {
    reset: () => initialNotificationsMonitorState,
  },
  extraReducers: (builder) => {
    // list apikeys
    builder.addMatcher(
      nseApi.endpoints.listNotificationsMonitor.matchPending,
      (state) => {
        state.isLoading = true;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.listNotificationsMonitor.matchFulfilled,
      (state, { payload }) => {
        notificationsMonitorAdapter.removeAll(state);
        notificationsMonitorAdapter.addMany(state, payload.results);
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
      nseApi.endpoints.listNotificationsMonitor.matchRejected,
      (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      },
    );

    // search  nitifications
    builder.addMatcher(
      nseApi.endpoints.searchNotificationReports.matchPending,
      (state) => {
        state.isLoading = true;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.searchNotificationReports.matchFulfilled,
      (state, { payload }) => {
        notificationsMonitorAdapter.removeAll(state);
        notificationsMonitorAdapter.addMany(state, payload.results);
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
      nseApi.endpoints.searchNotificationReports.matchRejected,
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
export const notificationsMonitorReducer = notificationsMonitorSlice.reducer;

export const notificationsMonitorActions = notificationsMonitorSlice.actions;
export const notificationsMonitorSelector =
  notificationsMonitorAdapter.getSelectors(
    (state: WebAppRootState) => state.notificationsMonitor,
  );
