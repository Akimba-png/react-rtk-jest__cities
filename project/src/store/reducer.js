import { ActionType } from './action';
import { AuthorizationStatus } from './../const';

const DefaultValues = {
  CITY: 'Paris',
  SORTING: 'Popular',
};

const initialState = {
  city: DefaultValues.CITY,
  sortType: DefaultValues.SORTING,
  activeCardId: null,
  offers: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.CHANGE_SORTIG:
      return {
        ...state,
        sortType: action.payload,
      };
    case ActionType.CHANGE_ACTIVE_CARD_ID:
      return {
        ...state,
        activeCardId: action.payload,
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };
    case ActionType.REQUIRE_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NOT_AUTH,
      };
    default:
      return state;
  }
};
