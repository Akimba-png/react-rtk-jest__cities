import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import LoadingPage from './loading-page';

const mockStore = configureStore({});

describe('Component: LoadingPage', () => {
  it('should render correctly when server is available', () => {
    const store = mockStore({
      DATA: {
        isServerAvailable: true,
      },
    });
    const { getByText } = render(
      <Provider store={store}>
        <LoadingPage />
      </Provider>,
    );
    const titleElement = getByText('Loading...');
    expect(titleElement).toBeInTheDocument();
  });

  it('should render additional message when server is unavailable', () => {
    const store = mockStore({
      DATA: {
        isServerAvailable: false,
      },
    });
    const { getByText } = render(
      <Provider store={store}>
        <LoadingPage />
      </Provider>,
    );
    const titleElement = getByText('Server is unavailable');
    expect(titleElement).toBeInTheDocument();
  });
});
