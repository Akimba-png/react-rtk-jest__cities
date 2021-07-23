import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import Navigation from './navigation';
import { AuthorizationStatus, TestUserInfo } from '../../const';

const mockStore = configureStore({});
let history;

describe('Component: Navigation', () => {
  beforeEach(() => {
    history = createMemoryHistory();
  });
  it('should render Properly when user is authorized', () => {

    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
    });
    Storage.prototype.getItem = () => JSON.stringify({
      email: TestUserInfo.EMAIL,
      avatarUrl: TestUserInfo.AVATAR_URL,
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <Navigation />
        </Router>
      </Provider>,
    );
    expect(screen.getByText(TestUserInfo.EMAIL)).toBeInTheDocument();
  });

  it('should render Properly when user is unauthorized', () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NOT_AUTH,
      },
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <Navigation />
        </Router>
      </Provider>,
    );
    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });
});
