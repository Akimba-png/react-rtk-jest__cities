import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {AppRoute} from './../../const.js';
import MainPage from './../main-page/main-page';
import LoginPage from './../login-page/login-page';
import FavoritesPage from './../favorites-page/favorites-page';
import PropertyPage from './../property-page/property-page';
import NotFoundPage from './../not-found-page/not-found-page';

function App(props) {
  const {placeCardsCount} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage placeCardsCount={placeCardsCount} />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginPage />
        </Route>
        <Route exact path={AppRoute.FAVORITE}>
          <FavoritesPage />
        </Route>
        <Route exact path={AppRoute.PROPERTY}>
          <PropertyPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  placeCardsCount: PropTypes.number.isRequired,
};

export default App;
