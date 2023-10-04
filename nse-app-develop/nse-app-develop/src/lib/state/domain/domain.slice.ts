import { nseApi } from './../../services/index';
import {
  createEntityAdapter,
  createSlice,
  EntityState,
} from '@reduxjs/toolkit';
import { IDomain } from '../../types';
import { WebAppRootState } from '..';

export const DOMAIN_FEATURE_KEY = 'domain';

/*
 * Update these interfaces according to your requirements.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DomainEntity extends IDomain {}

export interface DomainState extends EntityState<DomainEntity> {
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

export const domainAdapter = createEntityAdapter<DomainEntity>({
  selectId: (domain) => domain._id,
  sortComparer: (a, b) => {
    if (a.createdAt && b.createdAt)
      return b.createdAt.localeCompare(a.createdAt);
    else return 0;
  },
});

export const initialDomainState: DomainState = domainAdapter.getInitialState({
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

export const domainSlice = createSlice({
  name: DOMAIN_FEATURE_KEY,
  initialState: initialDomainState,
  reducers: {
    reset: () => initialDomainState,
  },
  extraReducers: (builder) => {
    // add domain
    builder.addMatcher(nseApi.endpoints.createDomain.matchPending, (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(
      nseApi.endpoints.createDomain.matchFulfilled,
      (state) => {
        state.isLoading = false;
      },
    );
    builder.addMatcher(nseApi.endpoints.createDomain.matchRejected, (state) => {
      state.isLoading = false;
    });

    // list domains
    builder.addMatcher(nseApi.endpoints.listDomains.matchPending, (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(
      nseApi.endpoints.listDomains.matchFulfilled,
      (state, { payload }) => {
        domainAdapter.removeAll(state);
        domainAdapter.addMany(state, payload.results);
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
      nseApi.endpoints.listDomains.matchRejected,
      (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      },
    );

    // Delete domain
    builder.addMatcher(nseApi.endpoints.deleteDomain.matchPending, (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(
      nseApi.endpoints.deleteDomain.matchFulfilled,
      (state) => {
        state.isLoading = false;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.deleteDomain.matchRejected,
      (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      },
    );

    // Verify domain
    builder.addMatcher(nseApi.endpoints.verifyDomain.matchPending, (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(
      nseApi.endpoints.verifyDomain.matchFulfilled,
      (state, action) => {
        state.isLoading = false;
        domainAdapter.updateOne(state, {
          id: action.payload.result._id,
          changes: action.payload.result,
        });
      },
    );
    builder.addMatcher(
      nseApi.endpoints.verifyDomain.matchRejected,
      (state, action) => {
        domainAdapter.updateOne(state, {
          id: action.meta.arg.originalArgs.id,
          changes: {
            isVerified: false,
          },
        });
        state.isLoading = false;
      },
    );

    // Verify domain records
    builder.addMatcher(
      nseApi.endpoints.verifyDomainRecords.matchPending,
      (state) => {
        state.isLoading = true;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.verifyDomainRecords.matchFulfilled,
      (state) => {
        state.isLoading = false;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.verifyDomainRecords.matchRejected,
      (state) => {
        state.isLoading = false;
      },
    );

    // Update apikey
    builder.addMatcher(nseApi.endpoints.updateDomain.matchPending, (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(
      nseApi.endpoints.updateDomain.matchFulfilled,
      (state, { payload }) => {
        state.isLoading = false;
        domainAdapter.updateOne(state, {
          id: payload.result._id,
          changes: payload.result,
        });
      },
    );
    builder.addMatcher(
      nseApi.endpoints.updateDomain.matchRejected,
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
export const domainReducer = domainSlice.reducer;

export const domainActions = domainSlice.actions;
export const domainSelector = domainAdapter.getSelectors(
  (state: WebAppRootState) => state.domain,
);
