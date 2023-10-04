import { nseApi } from './../../services/index';
import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../types';
import { omit } from 'lodash';

export const USER_FEATURE_KEY = 'user';

export interface UserState {
  isLoading: boolean;
  error: string | undefined;
  currentUser: IUser;
}

export const initialUserState: UserState = {
  isLoading: false,
  error: '',
  currentUser: {
    _id: '',
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    profileImage: '',
  },
};

// Create Slice
export const userSlice = createSlice({
  name: USER_FEATURE_KEY,
  initialState: initialUserState,
  reducers: {
    reset: () => initialUserState,
  },
  extraReducers: (builder) => {
    // Auth user
    builder.addMatcher(nseApi.endpoints.authUser.matchPending, (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(
      nseApi.endpoints.authUser.matchFulfilled,
      (state, action) => {
        state.isLoading = false;
        const user = action.payload;
        state.currentUser = {
          ...user,
        };
      },
    );
    builder.addMatcher(nseApi.endpoints.authUser.matchRejected, (state) => {
      state.isLoading = false;
    });

    // Login user
    builder.addMatcher(nseApi.endpoints.signin.matchPending, (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(
      nseApi.endpoints.signin.matchFulfilled,
      (state, action) => {
        state.isLoading = false;
        const user = omit(action.payload, 'token');
        state.currentUser = {
          ...user,
        };
      },
    );
    builder.addMatcher(nseApi.endpoints.signin.matchRejected, (state) => {
      state.isLoading = false;
    });

    // verify phone number
    builder.addMatcher(
      nseApi.endpoints.verifyPhoneNumber.matchPending,
      (state) => {
        state.isLoading = true;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.verifyPhoneNumber.matchFulfilled,
      (state, action) => {
        state.isLoading = false;
        state.currentUser.phone = `${action.meta.arg.originalArgs.phoneNumber}`;
      },
    );
    builder.addMatcher(
      nseApi.endpoints.verifyPhoneNumber.matchRejected,
      (state) => {
        state.isLoading = false;
      },
    );

    // update user profile
    builder.addMatcher(nseApi.endpoints.updateUser.matchPending, (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(
      nseApi.endpoints.updateUser.matchFulfilled,
      (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload.user;
      },
    );
    builder.addMatcher(nseApi.endpoints.updateUser.matchRejected, (state) => {
      state.isLoading = true;
    });
  },
});

export const userReducer = userSlice.reducer;

export const userActions = userSlice.actions;
