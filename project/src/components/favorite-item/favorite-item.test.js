import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import FavoriteItem from './favorite-item';
import { TestData, AuthorizationStatus } from './../../const';

const mockStore = configureStore({});

describe('Component: FavoriteItem', () => {
  it('should render properly when offer  was added to favorite', () => {

    const FAVORITE_OFFERS = [
      TestData.EXPECTED_OFFERS[0].city.name,
      TestData.EXPECTED_OFFERS,
    ];

    const history = createMemoryHistory();
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <FavoriteItem cityOffers={FAVORITE_OFFERS} />,
        </Router>
      </Provider>,
    );
    expect(screen.getByTestId('favorite-item')).toHaveClass('favorites__locations-items');
  });
});
