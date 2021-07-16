import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSorting, changeActiveCardId } from '../action';

const DefaultValues = {
  CITY: 'Paris',
  SORTING: 'Popular',
};

const initialState = {
  city: DefaultValues.CITY,
  sortType: DefaultValues.SORTING,
  activeCardId: null,
};

const appInteraction = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSorting, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(changeActiveCardId, (state, action) => {
      state.activeCardId = action.payload;
    });
});

export { appInteraction };
