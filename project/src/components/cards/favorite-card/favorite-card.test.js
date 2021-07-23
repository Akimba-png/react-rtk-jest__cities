import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import FavoriteCard from './favorite-card';
import { TestData, AuthorizationStatus } from './../../../const';

const CLASS_FAVORITE = 'favorites__card place-card';
const mockStore = configureStore({});

describe('Component: FavoriteCard', () => {
  it('should render card with favorite css values', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <FavoriteCard
            offer={TestData.EXPECTED_OFFERS[0]}
          />
        </Router>
      </Provider>,
    );
    expect(screen.getByTestId('card')).toHaveClass(CLASS_FAVORITE);
  });
});
