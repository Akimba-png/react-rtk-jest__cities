import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import LocationList from './location-list';
import { TestData } from '../../const';

const mockStore = configureStore({});

describe('Component: LocationList', () => {
  it('should render properly', () => {
    const store = mockStore({
      INTERACTION: TestData.CITY,
    });

    render(
      <Provider store={store}>
        <LocationList />
      </Provider>,
    );

    expect(screen.getByTestId('location-list')).toHaveClass('locations__list tabs__list');
    expect(screen.getByText(TestData.CITY)).toBeInTheDocument();
  });
});
