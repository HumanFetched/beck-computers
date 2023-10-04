/* eslint-disable @typescript-eslint/no-explicit-any */
import { nseApi } from '../../services/index';
import { createSlice } from '@reduxjs/toolkit';
import { WebAppRootState } from '..';
import { ITrafficState } from '../../types/traffic';

export const TRAFFIC_FEATURE_KEY = 'traffic';

export const initialReportState: ITrafficState = {
  isLoading: false,
  statusTraffic: {
    failed: {
      date: [],
      count: [],
    },
    bounce: {
      date: [],
      count: [],
    },
    delivered: {
      date: [],
      count: [],
    },
  },
  error: '',
};

export const trafficSlice = createSlice({
  name: TRAFFIC_FEATURE_KEY,
  initialState: initialReportState,
  reducers: {
    reset: () => initialReportState,
  },
  extraReducers: (builder) => {
    // list traffic
    builder.addMatcher(nseApi.endpoints.listTraffic.matchPending, (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(
      nseApi.endpoints.listTraffic.matchFulfilled,
      (state, { payload }) => {
        state.statusTraffic = {
          ...payload.results,
        };
        state.isLoading = false;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.listTraffic.matchRejected,
      (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || '';
      },
    );
  },
});

/*
 * Export reducer for store configuration.
 */
export const trafficReducer = trafficSlice.reducer;

export const trafficActions = trafficSlice.actions;
export const trafficSelector = (state: WebAppRootState) => state.traffic;
