import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import MainCard from './main-card';
import { TestData, AuthorizationStatus } from './../../../const';

const CLASS_MAIN = 'cities__place-card place-card';
const mockStore = configureStore({});

describe('Component: MainCard', () => {
  it('should render card with main card css values', () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
    });
    const history = createMemoryHistory();
    render(
      <Provider store={store}>
        <Router history={history}>
          <MainCard offer={TestData.EXPECTED_OFFERS[0]} />
        </Router>
      </Provider>,
    );
    expect(screen.getByTestId('card')).toHaveClass(CLASS_MAIN);
  });
});
