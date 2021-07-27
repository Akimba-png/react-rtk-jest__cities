import React from 'react';
import * as Redux from 'react-redux';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import FavoriteButton from './favorite-button';
import { AuthorizationStatus, Index } from './../../const';

const FLAG_MODE = true;
const mockStore = configureStore({});
let store;

describe('Component: FavoriteButton', () => {
  beforeAll(() => {
    store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
    });
  });

  it('should render properly', () => {
    render(
      <Provider store={store}>
        <FavoriteButton favoriteStatus={FLAG_MODE} offerId={Index.FIRST} />
      </Provider>,
    );
    expect(screen.getByTestId('favorite-button')).toBeInTheDocument();
  });

  it('should trigger store dispatch on user click', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    render(
      <Provider store={store}>
        <FavoriteButton favoriteStatus={FLAG_MODE} offerId={Index.FIRST} />
      </Provider>,
    );
    userEvent.click(screen.getByTestId('favorite-button'));
    expect(dispatch).toBeCalledTimes(Index.FIRST);
  });
});
