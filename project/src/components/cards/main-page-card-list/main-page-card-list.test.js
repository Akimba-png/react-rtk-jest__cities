import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import MainPageCardList from './main-page-card-list';
import { TestData } from './../../../const';

const CLASS_MAIN_PAGE_CONTAINER = 'cities__places-list places__list tabs__content';

const mockStore = configureStore({});

describe('Component: MainPageCardList', () => {
  it('should render with correct className', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      DATA: {
        offers: TestData.EXPECTED_OFFERS,
        isDataLoaded: true,
      },
      INTERACTION: {
        city: 'Paris',
        sortType: 'Popular',
      },
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <MainPageCardList />
        </Router>
      </Provider>,
    );
    expect(screen.getByTestId('main-page-containter')).toHaveClass(CLASS_MAIN_PAGE_CONTAINER);
  });
});
