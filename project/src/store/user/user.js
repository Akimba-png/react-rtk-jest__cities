import { createReducer } from '@reduxjs/toolkit';
import { requireAuthorization, logout } from './../action';
import { AuthorizationStatus } from './../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(logout, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { user };
