import React from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginPage from './login-page';
import { AuthorizationStatus, ApiRoute } from './../../../const';

const LOGIN = 'login@password.net';
const PASSWORD = 'no pass';

const mockStore = configureStore({});

describe('Component: LoginPage', () => {
  it('should render correctly, when user get login url', () => {
    const history = createMemoryHistory();
    history.push(ApiRoute.LOGIN);

    const store = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.NOT_AUTH },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <LoginPage />
        </Router>
      </Provider>,
    );

    expect(screen.getByLabelText('E-mail')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();

    userEvent.type(screen.getByTestId('email'), LOGIN);
    userEvent.type(screen.getByTestId('password'), PASSWORD);
    expect(screen.getByDisplayValue(LOGIN)).toBeInTheDocument();
    expect(screen.getByDisplayValue(PASSWORD)).toBeInTheDocument();
  });
});
