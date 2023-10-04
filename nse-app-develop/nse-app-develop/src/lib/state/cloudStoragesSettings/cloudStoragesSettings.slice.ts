import {
  createEntityAdapter,
  createSlice,
  EntityState,
} from '@reduxjs/toolkit';
import { ICloudStorageSettings, ICloudStorageTypes } from '../../types';
import { WebAppRootState } from '..';
import { nseApi } from '../../services';

export const CLOUD_STORAGES_SETTINGS_FEATURE_KEY = 'cloudStoragesSettings';

/*
 * Update these interfaces according to your requirements.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface cloudStoragesSettingsEntity extends ICloudStorageSettings {}

export interface cloudStoragesSettingsState
  extends EntityState<cloudStoragesSettingsEntity> {
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
  email: string;
  refreshToken: string;
  cloudStorageName: ICloudStorageTypes;
}

export const cloudStoragesSettingsAdapter =
  createEntityAdapter<cloudStoragesSettingsEntity>({
    selectId: (cloudStoragesSettings) => cloudStoragesSettings._id,
    sortComparer: (a, b) => {
      if (a.createdAt && b.createdAt)
        return b.createdAt.localeCompare(a.createdAt);
      else return 0;
    },
  });

export const initialReportsCloudPlatformState: cloudStoragesSettingsState =
  cloudStoragesSettingsAdapter.getInitialState({
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
    email: '',
    refreshToken: '',
    cloudStorageName: 'GOOGLE_DRIVE',
  });

export const cloudStoragesSettingsSlice = createSlice({
  name: CLOUD_STORAGES_SETTINGS_FEATURE_KEY,
  initialState: initialReportsCloudPlatformState,
  reducers: {
    reset: () => initialReportsCloudPlatformState,
    setCloudStorageName: (state, { payload }) => {
      state.email = payload.email;
      state.refreshToken = payload.refreshToken;
      state.cloudStorageName = payload.cloudStorageName;
    },
  },
  extraReducers: (builder) => {
    // list cloud platform
    builder.addMatcher(
      nseApi.endpoints.listCloudStoragesSettings.matchPending,
      (state) => {
        state.isLoading = true;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.listCloudStoragesSettings.matchFulfilled,
      (state, { payload }) => {
        cloudStoragesSettingsAdapter.removeAll(state);
        cloudStoragesSettingsAdapter.addMany(state, payload.results);
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
      nseApi.endpoints.listCloudStoragesSettings.matchRejected,
      (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      },
    );

    // add cloud platform
    builder.addMatcher(
      nseApi.endpoints.createCloudStorageSettings.matchPending,
      (state) => {
        state.isLoading = true;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.createCloudStorageSettings.matchFulfilled,
      (state) => {
        state.isLoading = false;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.createCloudStorageSettings.matchRejected,
      (state) => {
        state.isLoading = false;
      },
    );

    // Update cloud platform
    builder.addMatcher(
      nseApi.endpoints.updateCloudStorageSettings.matchPending,
      (state) => {
        state.isLoading = true;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.updateCloudStorageSettings.matchFulfilled,
      (state, { payload }) => {
        state.isLoading = false;
        cloudStoragesSettingsAdapter.updateOne(state, {
          id: payload.result._id,
          changes: payload.result,
        });
      },
    );
    builder.addMatcher(
      nseApi.endpoints.updateCloudStorageSettings.matchRejected,
      (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      },
    );

    // Delete cloud platform
    builder.addMatcher(
      nseApi.endpoints.deleteCloudStorageSettings.matchPending,
      (state) => {
        state.isLoading = true;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.deleteCloudStorageSettings.matchFulfilled,
      (state) => {
        state.isLoading = false;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.deleteCloudStorageSettings.matchRejected,
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
export const cloudStoragesSettingsReducer = cloudStoragesSettingsSlice.reducer;

export const cloudStoragesSettingsActions = cloudStoragesSettingsSlice.actions;
export const cloudStoragesSettingsSelector =
  cloudStoragesSettingsAdapter.getSelectors(
    (state: WebAppRootState) => state.cloudStoragesSettings,
  );
