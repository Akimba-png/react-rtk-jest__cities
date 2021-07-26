import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import FavoritePage from './favorites-page';
import { AuthorizationStatus, TestData, TestUserInfo } from './../../../const';
import { api } from '../../../store/store';


jest.mock('../../../store/store');
const mockStore = configureStore({});
let store;
let history;

describe('Component: FAVORITE', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    store = mockStore({
      DATA: {
        isServerAvailable: true,
      },
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
    });

    Storage.prototype.getItem = () => JSON.stringify({
      email: TestUserInfo.EMAIL,
      avatarUrl: TestUserInfo.AVATAR_URL,
    });
  });

  it('should render favorite page properly, when there are no favorite offers available', async () => {
    api.mockImplementationOnce(() => Promise.resolve({ data: []}));

    render(
      <Provider store={store}>
        <Router history={history}>
          <FavoritePage />
        </Router>
      </Provider>,
    );
    expect(await screen.findByText('Nothing yet saved.')).toBeInTheDocument();
  });

  it('should render favorite page properly, when favorite offers received', async () => {
    api.mockImplementationOnce(() => Promise.resolve({ data: TestData.INCOME_OFFERS }));

    render(
      <Provider store={store}>
        <Router history={history}>
          <FavoritePage />
        </Router>
      </Provider>,
    );
    expect(await screen.findByText('Saved listing')).toBeInTheDocument();
  });
});
