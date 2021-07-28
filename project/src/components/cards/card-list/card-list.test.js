import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import CardList from './card-list';
import { TestData, AuthorizationStatus, CardCssValue } from './../../../const';

const DEFAULT_CARD_CSS_VALUE = 'near-places__card place-card';
let history;
let store;

describe('Component: CardList', () => {
  beforeAll(() => {
    const mockStore = configureStore({});
    history = createMemoryHistory();
    store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
    });
  });

  it('should render main card type depend on received value', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <CardList
            offers={TestData.EXPECTED_OFFERS}
            cardMode={CardCssValue.Main}
          />
        </Router>
      </Provider>,
    );
    expect(screen.getByTestId('card')).toHaveClass(CardCssValue.Main.ARTICLE_CLASS_NAME);
  });

  it('should render favorite card type depend on received value', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <CardList
            offers={TestData.EXPECTED_OFFERS}
            cardMode={CardCssValue.Favorite}
          />
        </Router>
      </Provider>,
    );
    expect(screen.getByTestId('card')).toHaveClass(CardCssValue.Favorite.ARTICLE_CLASS_NAME);
  });

  it('should render default card type with no value received', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <CardList
            offers={TestData.EXPECTED_OFFERS}
          />
        </Router>
      </Provider>,
    );
    expect(screen.getByTestId('card')).toHaveClass(DEFAULT_CARD_CSS_VALUE);
  });
});
