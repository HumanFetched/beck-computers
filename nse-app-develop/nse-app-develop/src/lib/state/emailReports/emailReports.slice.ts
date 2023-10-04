import { nseApi } from '../../services/index';
import {
  createEntityAdapter,
  createSlice,
  EntityState,
} from '@reduxjs/toolkit';
import { IEmailReport } from '../../types';
import { WebAppRootState } from '..';

export const EMAIL_REPORTS_FEATURE_KEY = 'emailReports';

/*
 * Update these interfaces according to your requirements.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface emailReportEntity extends IEmailReport {}

export interface emailReportState extends EntityState<emailReportEntity> {
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

export const reportAdapter = createEntityAdapter<emailReportEntity>({
  selectId: (report) => report._id,
  sortComparer: (a, b) => {
    if (a.createdAt && b.createdAt)
      return b.createdAt.localeCompare(a.createdAt);
    else return 0;
  },
});

export const initialReportState: emailReportState =
  reportAdapter.getInitialState({
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

export const emailReportSlice = createSlice({
  name: EMAIL_REPORTS_FEATURE_KEY,
  initialState: initialReportState,
  reducers: {
    reset: () => initialReportState,
  },
  extraReducers: (builder) => {
    // list email reports
    builder.addMatcher(
      nseApi.endpoints.listEmailReports.matchPending,
      (state) => {
        state.isLoading = true;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.listEmailReports.matchFulfilled,
      (state, { payload }) => {
        reportAdapter.removeAll(state);
        reportAdapter.addMany(state, payload.results);
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
      nseApi.endpoints.listEmailReports.matchRejected,
      (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      },
    );

    // search email reports
    builder.addMatcher(
      nseApi.endpoints.searchEmailReports.matchPending,
      (state) => {
        state.isLoading = true;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.searchEmailReports.matchFulfilled,
      (state, { payload }) => {
        reportAdapter.removeAll(state);
        reportAdapter.addMany(state, payload.results);
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
      nseApi.endpoints.searchEmailReports.matchRejected,
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
export const emailReportReducer = emailReportSlice.reducer;

export const emailReportActions = emailReportSlice.actions;
export const reportSelector = reportAdapter.getSelectors(
  (state: WebAppRootState) => state.emailReports,
);
