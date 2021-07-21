import MockAdapter from 'axios-mock-adapter';
import { createApi } from './../services/api';
import { fetchOffersList, setFavoriteStatus, checkAuth, login, logout } from './api-actions';
import { ApiRoute, AppRoute, AuthorizationStatus, TestData, Index } from './../const';
import { ActionType } from './action';

const FunctionCallsNumber = {
  FIRST: 1,
  SECOND: 2,
};

const dispatch = jest.fn();
const getState = () => ({
  DATA: {
    offers: TestData.EXPECTED_OFFERS,
  },
});

let api = null;

describe('Assync Actions', () => {
  beforeAll(() => {
    api = createApi(() => { });
  });

  it('should make a correct API call to GET /hotels', () => {
    const apiMock = new MockAdapter(api);
    const offersListLoader = fetchOffersList();

    apiMock.onGet(ApiRoute.OFFERS).reply(TestData.SERVER_SUCCESSFUL_CODE, TestData.INCOME_OFFERS);

    return offersListLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(FunctionCallsNumber.FIRST);
        expect(dispatch).toHaveBeenNthCalledWith(FunctionCallsNumber.FIRST, {
          type: ActionType.LOAD_OFFERS,
          payload: TestData.EXPECTED_OFFERS,
        });
      });
  });


  it('should make a correct API call to Post /favorite', () => {
    const apiMock = new MockAdapter(api);

    const testStatusKit = {
      offerId: Index.FIRST,
      status: Index.FIRST,
      handleFavoriteStatus: jest.fn(),
    };
    const favoriteStatusLoader = setFavoriteStatus(
      testStatusKit.offerId,
      testStatusKit.status,
      testStatusKit.handleFavoriteStatus,
    );

    apiMock.onPost('/favorite/1/1').reply(TestData.SERVER_SUCCESSFUL_CODE, TestData.INCOME_OFFERS[0]);

    return favoriteStatusLoader(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(FunctionCallsNumber.FIRST);
        expect(dispatch).toHaveBeenNthCalledWith(FunctionCallsNumber.FIRST, {
          type: ActionType.LOAD_OFFERS,
          payload: TestData.EXPECTED_OFFERS,
        });
        expect(testStatusKit.handleFavoriteStatus).toHaveBeenCalledTimes(FunctionCallsNumber.FIRST);
      });
  });


  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const checkAuthLoader = checkAuth();

    apiMock.onGet(ApiRoute.LOGIN).reply(TestData.SERVER_SUCCESSFUL_CODE, [{ fake: true }]);

    return checkAuthLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(FunctionCallsNumber.FIRST);
        expect(dispatch).toHaveBeenNthCalledWith(FunctionCallsNumber.FIRST, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });


  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const testUser = {
      email: 'login@password.net',
      password: 'net',
    };
    const loginLoader = login(testUser);

    apiMock.onPost(ApiRoute.LOGIN).reply(TestData.SERVER_SUCCESSFUL_CODE, [{ fake: true }]);

    return loginLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(FunctionCallsNumber.SECOND);
        expect(dispatch).toHaveBeenNthCalledWith(FunctionCallsNumber.FIRST, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(FunctionCallsNumber.SECOND, {
          type: ActionType.REDIRECT,
          payload: AppRoute.MAIN,
        });
      });
  });


  it('should make a correct API call to DELETE /logout', () => {
    const apiMock = new MockAdapter(api);
    const logoutLoader = logout();

    apiMock.onDelete(ApiRoute.LOGOUT).reply(TestData.SERVER_SUCCESSFUL_CODE);

    return logoutLoader(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(FunctionCallsNumber.SECOND);
        expect(dispatch).toHaveBeenNthCalledWith(FunctionCallsNumber.FIRST, {
          type: ActionType.LOGOUT,
        });
        expect(dispatch).toHaveBeenNthCalledWith(FunctionCallsNumber.SECOND, {
          type: ActionType.LOAD_OFFERS,
          payload: TestData.EXPECTED_OFFERS,
        });
      });
  });
});
