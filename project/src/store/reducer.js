import { ActionType } from './action';
import { offers } from './../mocks/offers';
import { getCityOffers } from './../utils/common';

const DEFAULT_CITY = 'Paris';

const initialState = {
  city: DEFAULT_CITY,
  cityOffers: getCityOffers(offers, DEFAULT_CITY),
  offers,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.FILTER_OFFER_LIST:
      return {
        ...state,
        cityOffers: action.payload,
      };
    default:
      return state;
  }
};
