import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import MainPageMap from './main-page-map';
import { TestData } from './../../../const';

const mockStore = configureStore({});

describe('Component MainPageMap', () => {
  it('should render properly', () => {
    const store = mockStore({
      DATA: {
        offers: TestData.EXPECTED_OFFERS,
        isDataLoaded: true,
      },
      INTERACTION: {
        city: TestData.CITY,
        sortType: TestData.SORT_TYPE,
      },
    });
    render(
      <Provider store={store}>
        <MainPageMap />
      </Provider>,
    );
    expect(screen.getByText('Leaflet')).toBeInTheDocument();
  });
});
