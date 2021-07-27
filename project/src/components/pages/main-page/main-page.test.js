import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import MainPage from './main-page';
import { AuthorizationStatus, TestUserInfo, TestData } from './../../../const';

const mockStore = configureStore({});
const history = createMemoryHistory();

describe('Component: MainPage', () => {
  it('should render properly', () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
      INTERACTION: {
        sortType: TestData.SORT_TYPE,
        city: TestData.CITY,
      },
      DATA: {
        offers: TestData.EXPECTED_OFFERS,
        isDataLoaded: true,
        isServerAvailable: true,
      },
    });

    Storage.prototype.getItem = () => JSON.stringify({
      email: TestUserInfo.EMAIL,
      avatarUrl: TestUserInfo.AVATAR_URL,
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <MainPage />
        </Router>
      </Provider>,
    );
    expect(screen.getByText('Leaflet')).toBeInTheDocument();
  });
});
