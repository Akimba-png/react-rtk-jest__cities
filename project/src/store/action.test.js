import { TEST_NUMBER } from './../const';
import {
  changeCity,
  changeSorting,
  changeActiveCardId,
  loadOffers,
  requireAuthorization,
  logout,
  redirect,
  ActionType
} from './action';

describe('Actions', () => {
  it('action creator for change city returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: 'Paris',
    };
    const CITY = 'Paris';
    expect(changeCity(CITY)).toEqual(expectedAction);
  });

  it('action creator for change sorting returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_SORTIG,
      payload: 'Popular',
    };
    const SORT_TYPE = 'Popular';
    expect(changeSorting(SORT_TYPE)).toEqual(expectedAction);
  });

  it('action creator for change active card id returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_ACTIVE_CARD_ID,
      payload: TEST_NUMBER,
    };
    const CARD_ID = TEST_NUMBER;
    expect(changeActiveCardId(CARD_ID)).toEqual(expectedAction);
  });

  it('action creator for load offers returs correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: [{}, {}],
    };
    const OFFERS = [{}, {}];
    expect(loadOffers(OFFERS)).toEqual(expectedAction);
  });

  it('action creator for require authorization returns correct action', () => {
    const expectedAction = {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: 'Authorized',
    };
    const STATUS = 'Authorized';
    expect(requireAuthorization(STATUS)).toEqual(expectedAction);
  });

  it('action creator for logout returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };
    expect(logout()).toEqual(expectedAction);
  });

  it('action creator for redirect returns correct action', () => {
    const expectedAction = {
      type: ActionType.REDIRECT,
      payload: 'https://htmlacademy.ru/',
    };
    const URL = 'https://htmlacademy.ru/';
    expect(redirect(URL)).toEqual(expectedAction);
  });
});
