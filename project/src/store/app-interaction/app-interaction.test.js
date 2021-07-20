import { appInteraction } from './app-interaction';
import { ActionType } from './../action';
import { TEST_NUMBER } from './../../const';

const InitialState = {
  city: 'Paris',
  sortType: 'Popular',
  activeCardId: null,
};

describe('Reducer: appInteraction', () => {
  it('should return initial state if wrong arguments are passed', () => {
    expect(appInteraction(undefined, {})).toEqual(InitialState);
  });

  it('should change the city property to the passed value', () => {
    const changeCityAction = {
      type: ActionType.CHANGE_CITY,
      payload: 'Cartagena',
    };
    const expectedState = {
      city: 'Cartagena',
      sortType: 'Popular',
      activeCardId: null,
    };
    expect(appInteraction(InitialState, changeCityAction)).toEqual(expectedState);
  });

  it('should change the sortType property to the passed value', () => {
    const changeSortTypeAction = {
      type: ActionType.CHANGE_SORTIG,
      payload: 'from low to high',
    };
    const expectedState = {
      city: 'Paris',
      sortType: 'from low to high',
      activeCardId: null,
    };
    expect(appInteraction(InitialState, changeSortTypeAction)).toEqual(expectedState);
  });

  it('should change the activeCardId property to the passed value', () => {
    const changeActiveCardIdAction = {
      type: ActionType.CHANGE_ACTIVE_CARD_ID,
      payload: TEST_NUMBER,
    };
    const expectedState = {
      city: 'Paris',
      sortType: 'Popular',
      activeCardId: TEST_NUMBER,
    };
    expect(appInteraction(InitialState, changeActiveCardIdAction)).toEqual(expectedState);
  });
});
