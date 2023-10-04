import {
  createEntityAdapter,
  createSlice,
  EntityState,
} from '@reduxjs/toolkit';
import { WebAppRootState } from '..';
import { nseApi } from '../../services';
import { IProviderGroup } from '../../types';

export const PROVIDER_GROUPS_FEATURE_KEY = 'providerGroups';

/*
 * Update these interfaces according to your requirements.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProviderGroupsEntity extends IProviderGroup {}

export interface ProviderGroupsState extends EntityState<ProviderGroupsEntity> {
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

export const providerGroupsAdapter = createEntityAdapter<ProviderGroupsEntity>({
  selectId: (providerGroup) => providerGroup._id,
  sortComparer: (a, b) => {
    if (a.createdAt && b.createdAt)
      return b.createdAt.localeCompare(a.createdAt);
    else return 0;
  },
});

export const initialProviderGroupsState: ProviderGroupsState =
  providerGroupsAdapter.getInitialState({
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

export const providerGroupsSlice = createSlice({
  name: PROVIDER_GROUPS_FEATURE_KEY,
  initialState: initialProviderGroupsState,
  reducers: {
    reset: () => initialProviderGroupsState,
  },
  extraReducers: (builder) => {
    // List provider groups
    builder.addMatcher(
      nseApi.endpoints.listProviderGroups.matchPending,
      (state) => {
        state.isLoading = true;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.listProviderGroups.matchFulfilled,
      (state, { payload }) => {
        providerGroupsAdapter.removeAll(state);
        providerGroupsAdapter.addMany(state, payload.results);
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
      nseApi.endpoints.listProviderGroups.matchRejected,
      (state) => {
        state.isLoading = false;
      },
    );

    // delete provider group
    builder.addMatcher(
      nseApi.endpoints.deleteProviderGroup.matchPending,
      (state) => {
        state.isLoading = true;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.deleteProviderGroup.matchFulfilled,
      (state) => {
        state.isLoading = false;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.deleteProviderGroup.matchRejected,
      (state) => {
        state.isLoading = false;
      },
    );

    // create provider group
    builder.addMatcher(
      nseApi.endpoints.createProviderGroup.matchPending,
      (state) => {
        state.isLoading = true;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.createProviderGroup.matchFulfilled,
      (state, action) => {
        providerGroupsAdapter.addOne(state, action.payload.result);
        state.totalDocs = state.totalDocs + 1;
        state.isLoading = false;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.createProviderGroup.matchRejected,
      (state) => {
        state.isLoading = false;
      },
    );

    builder.addMatcher(
      nseApi.endpoints.searchProviderGroup.matchPending,
      (state) => {
        state.isLoading = true;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.searchProviderGroup.matchFulfilled,
      (state, { payload }) => {
        providerGroupsAdapter.removeAll(state);
        providerGroupsAdapter.addMany(state, payload.results);
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
      nseApi.endpoints.searchProviderGroup.matchRejected,
      (state) => {
        state.isLoading = false;
      },
    );
  },
});

/*
 * Export reducer for store configuration.
 */
export const providerGroupsReducer = providerGroupsSlice.reducer;

export const providerGroupsActions = providerGroupsSlice.actions;
export const providerGroupsSelector = providerGroupsAdapter.getSelectors(
  (state: WebAppRootState) => state.providerGroups,
);
