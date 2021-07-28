import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import CardListTitle from './card-list-title';
import { TestData } from './../../../const';

const mockStore = configureStore({});

describe('Component: CardListTitle', () => {
  it('should render correctly', () => {
    const store = mockStore({
      DATA: {
        offers: TestData.EXPECTED_OFFERS,
        isDataLoaded: true,
      },
      INTERACTION: {
        city: 'Amsterdam',
        sortType: 'Popular',
      },
    });

    render(
      <Provider store={store}>
        <CardListTitle />
      </Provider>,
    );
    expect(screen.getByText('1 place to stay in Amsterdam')).toBeInTheDocument();
  });
});
