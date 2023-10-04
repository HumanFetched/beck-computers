import { createSlice } from '@reduxjs/toolkit';
import { nseApi } from '../../services';
import { IProvider, IProviderGroup } from '../../types';
export const PROVIDER_GROUP_CONFIG_FEATURE_KEY = 'groupConfig';

export interface ProviderGroupConfigState {
  isLoading: boolean;
  isProvidersLoading: boolean;
  error: string | undefined;
  group: IProviderGroup;
}

export const initialProviderGroupConfigState: ProviderGroupConfigState = {
  isLoading: false,
  isProvidersLoading: false,
  error: '',
  group: {
    _id: '',
    name: '',
    user: '',
    domain: '',
    providers: [],
    createdAt: '',
    updatedAt: '',
  },
};

// Create Slice
export const providerGroupConfigSlice = createSlice({
  name: PROVIDER_GROUP_CONFIG_FEATURE_KEY,
  initialState: initialProviderGroupConfigState,
  reducers: {
    reset: () => initialProviderGroupConfigState,
    updateProviderReducer: (state, { payload }) => {
      state.group.providers = payload;
    },
  },
  extraReducers: (builder) => {
    // create group
    builder.addMatcher(
      nseApi.endpoints.createProviderGroup.matchPending,
      (state) => {
        state.isLoading = true;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.createProviderGroup.matchFulfilled,
      (state, action) => {
        const { payload } = action;
        state.group = {
          ...payload.result,
        };
        state.isLoading = false;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.createProviderGroup.matchRejected,
      (state) => {
        state.isLoading = false;
      },
    );

    // get provider group details
    builder.addMatcher(
      nseApi.endpoints.getProviderGroup.matchPending,
      (state) => {
        state.isLoading = true;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.getProviderGroup.matchFulfilled,
      (state, action) => {
        const { payload } = action;
        state.group = {
          ...payload.result,
        };
        state.isLoading = false;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.getProviderGroup.matchRejected,
      (state) => {
        state.isLoading = false;
      },
    );

    // update provider group details
    builder.addMatcher(
      nseApi.endpoints.updateProviderGroup.matchPending,
      (state) => {
        state.isLoading = true;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.updateProviderGroup.matchFulfilled,
      (state, action) => {
        const { payload } = action;
        state.group = {
          ...payload.result,
        };
        state.isLoading = false;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.updateProviderGroup.matchRejected,
      (state) => {
        state.isLoading = false;
      },
    );

    // add provider in group
    builder.addMatcher(
      nseApi.endpoints.addProviderInGroup.matchPending,
      (state) => {
        state.isProvidersLoading = true;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.addProviderInGroup.matchFulfilled,
      (state, { payload }) => {
        state.isProvidersLoading = false;
        state.group.providers.push(payload.result.provider as IProvider);
      },
    );
    builder.addMatcher(
      nseApi.endpoints.addProviderInGroup.matchRejected,
      (state) => {
        state.isProvidersLoading = false;
      },
    );

    // remove provider from group
    builder.addMatcher(
      nseApi.endpoints.removeProviderFromGroup.matchPending,
      (state) => {
        state.isProvidersLoading = true;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.removeProviderFromGroup.matchFulfilled,
      (state, { payload }) => {
        state.isProvidersLoading = false;
        const index = state.group.providers.findIndex(
          (item) => item._id === payload.result.provider,
        );
        if (index > -1) state.group.providers.splice(index, 1);
      },
    );
    builder.addMatcher(
      nseApi.endpoints.removeProviderFromGroup.matchRejected,
      (state) => {
        state.isProvidersLoading = false;
      },
    );

    // update provider in group
    builder.addMatcher(
      nseApi.endpoints.updateProviderDetails.matchPending,
      (state) => {
        state.isProvidersLoading = true;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.updateProviderDetails.matchFulfilled,
      (state, action) => {
        const { payload } = action;
        const index = state.group.providers.findIndex(
          (prov) => prov._id === action.meta.arg.originalArgs.id,
        );
        state.group.providers[index] = {
          ...payload.result,
        };
        state.isProvidersLoading = false;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.updateProviderDetails.matchRejected,
      (state) => {
        state.isProvidersLoading = false;
      },
    );
  },
});

export const providerGroupConfigReducer = providerGroupConfigSlice.reducer;

export const providerGroupConfigActions = providerGroupConfigSlice.actions;
