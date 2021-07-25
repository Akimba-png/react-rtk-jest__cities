import { createReducer } from '@reduxjs/toolkit';
import { loadOffers, changeErrorStatus } from './../action';

const initialState = {
  offers: [],
  isDataLoaded: false,
  isServerAvailable: true,
};

const appData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(changeErrorStatus, (state) => {
      state.isServerAvailable = false;
    });
});

export { appData };
