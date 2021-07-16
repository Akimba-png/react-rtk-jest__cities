import { createReducer } from '@reduxjs/toolkit';
import { loadOffers } from './../action';

const initialState = {
  offers: [],
  isDataLoaded: false,
};

const appData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    });
});

export { appData };
