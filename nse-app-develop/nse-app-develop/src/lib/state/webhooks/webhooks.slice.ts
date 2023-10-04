import { nseApi } from './../../services/index';
import {
  createEntityAdapter,
  createSlice,
  EntityState,
} from '@reduxjs/toolkit';
import { IWebhook } from '../../types';
import { WebAppRootState } from '..';

export const WEBHOOKS_FEATURE_KEY = 'webhooks';

/*
 * Update these interfaces according to your requirements.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface webhookEntity extends IWebhook {}

export interface webhookState extends EntityState<webhookEntity> {
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

export const webhookAdapter = createEntityAdapter<webhookEntity>({
  selectId: (webhook) => webhook._id,
  sortComparer: (a, b) => {
    if (a.createdAt && b.createdAt)
      return b.createdAt.localeCompare(a.createdAt);
    else return 0;
  },
});

export const initialWebhookState: webhookState = webhookAdapter.getInitialState(
  {
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
  },
);

export const webhookSlice = createSlice({
  name: WEBHOOKS_FEATURE_KEY,
  initialState: initialWebhookState,
  reducers: {
    reset: () => initialWebhookState,
  },
  extraReducers: (builder) => {
    // add apikey
    builder.addMatcher(nseApi.endpoints.createWebhook.matchPending, (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(
      nseApi.endpoints.createWebhook.matchFulfilled,
      (state) => {
        state.isLoading = false;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.createWebhook.matchRejected,
      (state) => {
        state.isLoading = false;
      },
    );

    // list apikeys
    builder.addMatcher(nseApi.endpoints.listWebhooks.matchPending, (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(
      nseApi.endpoints.listWebhooks.matchFulfilled,
      (state, { payload }) => {
        webhookAdapter.removeAll(state);
        webhookAdapter.addMany(state, payload.results);
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
      nseApi.endpoints.listWebhooks.matchRejected,
      (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      },
    );

    // Delete apikey
    builder.addMatcher(nseApi.endpoints.deleteWebhook.matchPending, (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(
      nseApi.endpoints.deleteWebhook.matchFulfilled,
      (state) => {
        state.isLoading = false;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.deleteWebhook.matchRejected,
      (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      },
    );

    // Update apikey
    builder.addMatcher(nseApi.endpoints.updateWebhook.matchPending, (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(
      nseApi.endpoints.updateWebhook.matchFulfilled,
      (state, { payload }) => {
        state.isLoading = false;
        webhookAdapter.updateOne(state, {
          id: payload.result._id,
          changes: payload.result,
        });
      },
    );
    builder.addMatcher(
      nseApi.endpoints.updateWebhook.matchRejected,
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
export const webhookReducer = webhookSlice.reducer;

export const webhookActions = webhookSlice.actions;
export const webhookSelector = webhookAdapter.getSelectors(
  (state: WebAppRootState) => state.webhooks,
);
