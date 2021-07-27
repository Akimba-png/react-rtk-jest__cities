import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import PrivateRoute from './private-route';
import { AuthorizationStatus, AppRoute } from '../../const';

const ComponentContent = {
  PUBLIC: 'Public route',
  PRIVATE: 'Private route',
};

const mockStore = configureStore({});
let store;
let history;

describe('Component: PrivateRoute', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    history.push(AppRoute.FAVORITE);
  });

  it('should render public route when autorization status is unauthorized', () => {
    store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NOT_AUTH,
      },
    });

    render(
      <Provider store={store} >
        <Router history={history}>
          <Route exact path={AppRoute.LOGIN}><p>{ComponentContent.PUBLIC}</p></Route>
          <PrivateRoute exact path={AppRoute.FAVORITE} render={() => (<p>{ComponentContent.PRIVATE}</p>)} />
        </Router>
      </Provider>,
    );
    expect(screen.getByText(ComponentContent.PUBLIC)).toBeInTheDocument();
    expect(screen.queryByText(ComponentContent.PRIVATE)).not.toBeInTheDocument();
  });

  it('should render private route when autorization status is authorized', () => {
    store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
    });

    render(
      <Provider store={store} >
        <Router history={history}>
          <Route exact path={AppRoute.LOGIN}><p>{ComponentContent.PUBLIC}</p></Route>
          <PrivateRoute exact path={AppRoute.FAVORITE} render={() => (<p>{ComponentContent.PRIVATE}</p>)} />
        </Router>
      </Provider>,
    );
    expect(screen.getByText(ComponentContent.PRIVATE)).toBeInTheDocument();
    expect(screen.queryByText(ComponentContent.PUBLIC)).not.toBeInTheDocument();
  });
});

