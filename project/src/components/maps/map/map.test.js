import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import Map from './map';
import { TestData } from './../../../const';

const mockStore = configureStore({});

describe('Component MainPageMap', () => {
  it('should render leaflet Map', () => {
    const store = mockStore({
      INTERACTION: {
        activeCardId: '',
      },
    });

    render(
      <Provider store={store}>
        <Map offers={TestData.EXPECTED_OFFERS} />
      </Provider>,
    );
    expect(screen.getByText('Leaflet')).toBeInTheDocument();
  });
});
