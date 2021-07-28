import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import Card from './card';
import { TestData, AuthorizationStatus } from './../../../const';

const CLASS_NEAR = 'near-places__card place-card';
const mockStore = configureStore({});

describe('Component: Card', () => {
  it('should render properly', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      USER: {
        authorizationStatus:  AuthorizationStatus.AUTH,
      },
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <Card
            offer={TestData.EXPECTED_OFFERS[0]}
            onChangeActiveCardId={() => { }}
          />
        </Router>
      </Provider>,
    );
    expect(screen.getByTestId('card')).toHaveClass(CLASS_NEAR);
  });
});

