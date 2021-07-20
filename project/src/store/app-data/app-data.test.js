import { appData } from './app-data';
import { ActionType } from './../action';

const initialState = {
  offers: [],
  isDataLoaded: false,
};

const OFFERS = [
  {
    city: 'Cartagena',
    goods: ['Kitchen', 'Fridge'],
    host: 'Bartholomeow',
    id: 1,
    price: 500,
  },
  {
    city: 'Barbados',
    goods: ['Heating', 'Dishwasher'],
    host: 'Blackbeard',
    id: 2,
    price: 1500,
  },
];

describe('Reducer: appData', () => {
  it('should return initial state if wrong arguments are passed', () => {
    expect(appData(undefined, {})).toEqual(initialState);
  });

  it('should update offers property by load offers', () => {
    const loadOffersAction = {
      type: ActionType.LOAD_OFFERS,
      payload: OFFERS,
    };
    const expectedState = {
      offers: OFFERS,
      isDataLoaded: true,
    };
    expect(appData(initialState, loadOffersAction)).toEqual(expectedState);
  });
});
