import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppRoute } from './../../const.js';
import MainPage from './../pages/main-page/main-page';
import LoginPage from './../pages/login-page/login-page';
import FavoritesPage from './../pages/favorites-page/favorites-page';
import PropertyPage from './../pages/property-page/property-page';
import NotFoundPage from './../pages/not-found-page/not-found-page';
import cardListProp from './../cards/card-list/card-list.prop';
import reviewsListProp from './../reviews-list/reviews-list.prop.js';

function App(props) {
  const { offers, reviews } = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact path={AppRoute.MAIN}
          render={(routerProps) => <MainPage offers={offers} />}

        >
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginPage />
        </Route>
        <Route
          exact path={AppRoute.FAVORITE}
          render={(routerProps) => <FavoritesPage offers={offers} />}
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
  offers: cardListProp,
  reviews: reviewsListProp,
};

export default App;
