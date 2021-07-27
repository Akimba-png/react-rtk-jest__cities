import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import MainPageContainer from './main-page-container';
import { TestData, AuthorizationStatus } from './../../const';

const mockStore = configureStore({});
let history;

describe('Component: MainPageContainer', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });

  it('should render MainPage page, when offers for current city is available', () => {
    const store = mockStore({
      DATA: {
        offers: TestData.EXPECTED_OFFERS,
      },
      INTERACTION: {
        city: 'Amsterdam',
        sortType: 'Popular',
      },
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <MainPageContainer onOffersUnavailable={jest.fn()} />
        </Router>
      </Provider>,
    );
    expect(screen.getByText('Leaflet')).toBeInTheDocument();
  });

  it('should render MainPageEmpty, when offers for current city is unavailable', async () => {
    const store = mockStore({
      DATA: {
        offers: [],
        isDataLoaded: true,
      },
      INTERACTION: {
        city: 'Amsterdam',
        sortType: 'Popular',
      },
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <MainPageContainer onOffersUnavailable={jest.fn()} />
        </Router>
      </Provider>,
    );
    expect(await screen.findByText('No places to stay available')).toBeInTheDocument();
  });
});
