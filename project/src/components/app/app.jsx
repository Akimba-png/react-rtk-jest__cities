import React from 'react';
import { Switch, Route } from 'react-router-dom';
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
        render={() => <PropertyPage />}
      >
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
}

export default App;
