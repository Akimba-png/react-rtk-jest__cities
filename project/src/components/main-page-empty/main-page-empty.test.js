import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import MainPageEmpty from './main-page-empty';
import { TestData } from './../../const';

const mockStore = configureStore({});

describe('Component: MainPageEmpty', () => {
  it('should render properly when there are no offers available for the city', () => {
    const store = mockStore({
      INTERACTION: {
        city: TestData.CITY,
      },
    });
    render(
      <Provider store={store}>
        <MainPageEmpty />
      </Provider>,
    );
    expect(screen.getByText('No places to stay available')).toBeInTheDocument();
    expect(screen.getByText('We could not find any property available at the moment in Amsterdam')).toBeInTheDocument();
  });
});
