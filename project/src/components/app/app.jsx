import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppRoute } from './../../const.js';
import MainPage from './../main-page/main-page';
import LoginPage from './../login-page/login-page';
import FavoritesPage from './../favorites-page/favorites-page';
import PropertyPage from './../property-page/property-page';
import NotFoundPage from './../not-found-page/not-found-page';
import placeCardListProp from './../place-card-list/place-card-list.prop';
import reviewsListProp from './../reviews-list/reviews-list.prop.js';

function App(props) {
  const { offers, reviews } = props;
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
          render={(routerProps) => <PropertyPage offers={offers} reviews={reviews} {...routerProps} />}
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
  reviews: reviewsListProp,
};

export default App;
