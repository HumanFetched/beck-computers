import { nseApi } from './../../services/index';
import {
  createEntityAdapter,
  createSlice,
  EntityState,
} from '@reduxjs/toolkit';
import { IApiKey } from '../../types';
import { WebAppRootState } from '..';

export const API_KEYS_FEATURE_KEY = 'apiKey';

/*
 * Update these interfaces according to your requirements.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface apiKeyEntity extends IApiKey {}

export interface apiKeyState extends EntityState<apiKeyEntity> {
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

export const apiKeyAdapter = createEntityAdapter<apiKeyEntity>({
  selectId: (apiKey) => apiKey._id,
  sortComparer: (a, b) => {
    if (a.createdAt && b.createdAt)
      return b.createdAt.localeCompare(a.createdAt);
    else return 0;
  },
});

export const initialApiKeyState: apiKeyState = apiKeyAdapter.getInitialState({
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

export const apiKeySlice = createSlice({
  name: API_KEYS_FEATURE_KEY,
  initialState: initialApiKeyState,
  reducers: {
    reset: () => initialApiKeyState,
  },
  extraReducers: (builder) => {
    // add apikey
    builder.addMatcher(nseApi.endpoints.createApiKey.matchPending, (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(
      nseApi.endpoints.createApiKey.matchFulfilled,
      (state) => {
        state.isLoading = false;
      },
    );
    builder.addMatcher(nseApi.endpoints.createApiKey.matchRejected, (state) => {
      state.isLoading = false;
    });

    // list apikeys
    builder.addMatcher(nseApi.endpoints.listApiKeys.matchPending, (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(
      nseApi.endpoints.listApiKeys.matchFulfilled,
      (state, { payload }) => {
        apiKeyAdapter.removeAll(state);
        apiKeyAdapter.addMany(state, payload.results);
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
      nseApi.endpoints.listApiKeys.matchRejected,
      (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      },
    );

    // Delete apikey
    builder.addMatcher(nseApi.endpoints.deleteApiKey.matchPending, (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(
      nseApi.endpoints.deleteApiKey.matchFulfilled,
      (state) => {
        state.isLoading = false;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.deleteApiKey.matchRejected,
      (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      },
    );

    // Update apikey
    builder.addMatcher(nseApi.endpoints.updateApiKey.matchPending, (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(
      nseApi.endpoints.updateApiKey.matchFulfilled,
      (state, { payload }) => {
        state.isLoading = false;
        apiKeyAdapter.updateOne(state, {
          id: payload.result._id,
          changes: payload.result,
        });
      },
    );
    builder.addMatcher(
      nseApi.endpoints.updateApiKey.matchRejected,
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
export const apiKeyReducer = apiKeySlice.reducer;

export const apiKeyActions = apiKeySlice.actions;
export const apiKeySelector = apiKeyAdapter.getSelectors(
  (state: WebAppRootState) => state.apiKey,
);
