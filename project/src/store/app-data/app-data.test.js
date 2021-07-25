import { appData } from './app-data';
import { ActionType } from './../action';
import { TestData } from './../../const';

const initialState = {
  offers: [],
  isDataLoaded: false,
  isServerAvailable: true,
};

describe('Reducer: appData', () => {
  it('should return initial state if wrong arguments are passed', () => {
    expect(appData(undefined, {})).toEqual(initialState);
  });

  it('should update offers property by load offers', () => {
    const loadOffersAction = {
      type: ActionType.LOAD_OFFERS,
      payload: TestData.EXPECTED_OFFERS[0],
    };
    const expectedState = {
      offers: TestData.EXPECTED_OFFERS[0],
      isDataLoaded: true,
      isServerAvailable: true,
    };
    expect(appData(initialState, loadOffersAction)).toEqual(expectedState);
  });

  it('should change server available status properly when server is unavailable', () => {
    const changeErrorAction = {
      type: ActionType.CHANGE_ERROR_STATUS,
    };
    const expectedState = {
      offers: [],
      isDataLoaded: false,
      isServerAvailable: false,
    };
    expect(appData(initialState, changeErrorAction)).toEqual(expectedState);
  });
});
