import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import App from './app';
import { api } from './../../store/store';
import {
  AppRoute,
  TestData,
  AuthorizationStatus,
  TestUserInfo,
  LOCATIONS,
  SortValue,
  Index
} from './../../const';

jest.mock('./../../store/store');
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
    api.get.mockImplementation(() => Promise.resolve({ data: []}));
    render(fakeApp);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render non found page when there is non-existent route', () => {
    history.push('/non-existent route');
    render(fakeApp);
    expect(screen.getByText('404 Страница не найдена')).toBeInTheDocument();
  });
});
