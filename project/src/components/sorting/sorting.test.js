import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import Sorting from './sorting';
import { TestData } from './../../const';

let store;

describe('Component: Sorting', () => {
  beforeAll(() => {
    const mockStore = configureStore({});
    store = mockStore({
      INTERACTION: {
        sortType: TestData.SORT_TYPE,
        activeCardId: TestData.ACTIVE_CARD_ID,
      },
    });
  });
  it('should render properly', () => {
    render(
      <Provider store={store}>
        <Sorting />
      </Provider>,
    );
    expect(screen.getByText('Sort by')).toBeInTheDocument();
  });
});
