import React from 'react';
import { Router as BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppRoute } from './../../const.js';
import PrivateRoute from './../private-route/private-route';
import MainPage from './../pages/main-page/main-page';
import LoginPage from './../pages/login-page/login-page';
import FavoritesPage from './../pages/favorites-page/favorites-page';
import PropertyPage from './../pages/property-page/property-page';
import NotFoundPage from './../pages/not-found-page/not-found-page';
import LoadingPage from './../pages/loading-page/loading-page';
import { isAuthorizationStatusReceived } from './../../utils/server';
import browserHistory from './../../browser-history.js';
import { getDataLoadedStatus } from './../../store/app-data/selectors.js';
import { getAuthorizationStatus } from './../../store/user/selectors.js';

function App() {

  const loadingStatus = useSelector(getDataLoadedStatus);
  const currentAuthorizationStatus = useSelector(getAuthorizationStatus);

  if (!loadingStatus || !isAuthorizationStatusReceived(currentAuthorizationStatus)) {
    return (
      <LoadingPage />
    );
  }
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route
          exact path={AppRoute.MAIN}
          render={() => <MainPage />}
        >
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginPage />
        </Route>
        <PrivateRoute
          exact path={AppRoute.FAVORITE}
          render={() => <FavoritesPage />}
        >
        </PrivateRoute>
        <Route
          exact path={AppRoute.PROPERTY}
          render={(routerProps) => <PropertyPage {...routerProps} />}
        >
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
