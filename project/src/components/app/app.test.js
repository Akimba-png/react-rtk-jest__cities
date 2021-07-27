import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import App from './app';
import { api } from './../../store/store';
import { useAsync } from './../../hooks/useAsync';
import {
  AppRoute,
  TestData,
  AuthorizationStatus,
  TestUserInfo,
  TEST_REVIEWS,
  LOCATIONS,
  SortValue,
  Index
} from './../../const';

jest.mock('./../../store/store');
jest.mock('./../../hooks/useAsync');

const mockStore = configureStore({});
let store;
let history;
let fakeApp;

describe('Component: App', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    store = mockStore({
      DATA: {
        offers: TestData.EXPECTED_OFFERS,
        isDataLoaded: true,
      },
      INTERACTION: {
        city: LOCATIONS[Index.FOURTH],
        sortType: SortValue.POPULAR,
        activeCardId: null,
      },
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
    });

    Storage.prototype.getItem = () => JSON.stringify({
      email: TestUserInfo.EMAIL,
      avatarUrl: TestUserInfo.AVATAR_URL,
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });

  it('should render main page, when url is /', () => {
    history.push(AppRoute.MAIN);
    render(fakeApp);
    expect(screen.getByText('1 place to stay in Amsterdam')).toBeInTheDocument();
  });

  it('should render favorite page, when url is /favorite', async () => {
    history.push(AppRoute.FAVORITE);
    api.mockImplementationOnce(() => Promise.resolve({ data: []}));
    render(fakeApp);
    expect(await screen.findByText('Nothing yet saved.')).toBeInTheDocument();
  });

  it('should render login page, when url is /login', () => {
    history.push(AppRoute.LOGIN);
    store = mockStore({
      DATA: {
        offers: TestData.EXPECTED_OFFERS,
        isDataLoaded: true,
      },
      USER: {
        authorizationStatus: AuthorizationStatus.NOT_AUTH,
      },
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>);
    expect(screen.getByTestId('email')).toBeInTheDocument();
  });

  it('should render property page, when url is /property', async () => {
    history.push(AppRoute.PROPERTY);
    useAsync.mockImplementation(() => (
      {
        propertyData: [
          TestData.EXPECTED_OFFERS[0],
          TestData.EXPECTED_OFFERS,
          TEST_REVIEWS,
        ],
        errorSatus: null,
        setPropertyData: jest.fn(),
        offerId: `${Index.FIRST.toString}`,
      }
    ));
    render(fakeApp);
    expect(await screen.findByText('Meet the host')).toBeInTheDocument();
  });

  it('should render non found page when there is non-existent route', () => {
    history.push('/non-existent route');
    render(fakeApp);
    expect(screen.getByText('404 Страница не найдена')).toBeInTheDocument();
  });
});
