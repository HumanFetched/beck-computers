import {
  createEntityAdapter,
  createSlice,
  EntityState,
} from '@reduxjs/toolkit';
import { WebAppRootState } from '..';
import { nseApi } from '../../services';
import { IEmailProvider } from '../../types';

export const EMAIL_PROVIDERS_FEATURE_KEY = 'emailProviders';

/*
 * Update these interfaces according to your requirements.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface EmailProvidersEntity extends IEmailProvider {}

export interface EmailProvidersState extends EntityState<EmailProvidersEntity> {
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

export const emailProvidersAdapter = createEntityAdapter<EmailProvidersEntity>({
  selectId: (providers) => providers._id,
  sortComparer: (a, b) => {
    if (a.createdAt && b.createdAt)
      return b.createdAt.localeCompare(a.createdAt);
    else return 0;
  },
});

export const initialEmailProvidersState: EmailProvidersState =
  emailProvidersAdapter.getInitialState({
    isLoading: false,
    error: undefined,
    totalDocs: 0,
    page: 0,
    limit: 0,
    totalPages: 0,
    pagingCounter: 0,
    hasPrevPage: false,
    hasNextPage: false,
    prevPage: 0,
    nextPage: 0,
  });

export const emailProvidersSlice = createSlice({
  name: EMAIL_PROVIDERS_FEATURE_KEY,
  initialState: initialEmailProvidersState,
  reducers: {
    reset: () => initialEmailProvidersState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      nseApi.endpoints.listEmailProviders.matchPending,
      (state) => {
        state.isLoading = true;
      },
    );
    builder.addMatcher(
      // List providers
      nseApi.endpoints.listEmailProviders.matchFulfilled,
      (state, { payload }) => {
        emailProvidersAdapter.removeAll(state);
        emailProvidersAdapter.addMany(state, payload.results);
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
      nseApi.endpoints.listEmailProviders.matchRejected,
      (state) => {
        state.isLoading = true;
      },
    );
  },
});

/*
 * Export reducer for store configuration.
 */
export const emailProvidersReducer = emailProvidersSlice.reducer;

export const emailProvidersActions = emailProvidersSlice.actions;
export const emailProvidersSelector = emailProvidersAdapter.getSelectors(
  (state: WebAppRootState) => state.emailProviders,
);
