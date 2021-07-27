import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import PropertyPage from './property-page';
import { useAsync } from '../../../hooks/useAsync';
import { AuthorizationStatus, TestData, TEST_REVIEWS, TestUserInfo, Index } from '../../../const';


jest.mock('./../../../hooks/useAsync');
const mockStore = configureStore({});
let store;
let history;

describe('Component: PropertyPage', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    store = mockStore({
      INTERACTION: {
        activeCardId: null,
      },
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
    });

    Storage.prototype.getItem = () => JSON.stringify({
      email: TestUserInfo.EMAIL,
      avatarUrl: TestUserInfo.AVATAR_URL,
    });
  });

  it('should render property page properly', async () => {
    useAsync.mockImplementation(() => (
      {
        propertyData: [
          TestData.EXPECTED_OFFERS[0],
          TestData.EXPECTED_OFFERS,
          TEST_REVIEWS,
        ],
        errorSatus: null,
        setPropertyData: jest.fn(),
        offerId: `${Index.FIRST.toString}`,
      }
    ));

    render(
      <Provider store={store}>
        <Router history={history}>
          <PropertyPage />
        </Router>
      </Provider>,
    );
    expect(await screen.findByText('Meet the host')).toBeInTheDocument();
  });
});
