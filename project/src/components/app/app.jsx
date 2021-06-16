import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppRoute } from './../../const.js';
import MainPage from './../main-page/main-page';
import LoginPage from './../login-page/login-page';
import FavoritesPage from './../favorites-page/favorites-page';
import PropertyPage from './../property-page/property-page';
import NotFoundPage from './../not-found-page/not-found-page';
import placeCardListProp from './../place-card-list/place-card-list.prop';

function App(props) {
  const { offers } = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact path={AppRoute.MAIN}
          render={(routerProps) => <MainPage offers={offers} {...routerProps} />}
        >
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginPage />
        </Route>
        <Route
          exact path={AppRoute.FAVORITE}
          render={(routerProps) => <FavoritesPage offers={offers} {...routerProps} />}
        >
        </Route>
        <Route
          exact path={AppRoute.PROPERTY}
          render={(routerProps) => <PropertyPage offers={offers} {...routerProps} />}
        >
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: placeCardListProp,
};

export default App;
