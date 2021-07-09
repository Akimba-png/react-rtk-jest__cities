import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AppRoute } from './../../const.js';
import PrivateRoute from './../private-route/private-route';
import MainPage from './../pages/main-page/main-page';
import LoginPage from './../pages/login-page/login-page';
import FavoritesPage from './../pages/favorites-page/favorites-page';
import PropertyPage from './../pages/property-page/property-page';
import NotFoundPage from './../pages/not-found-page/not-found-page';
import LoadingPage from './../pages/loading-page/loading-page';
import reviewsListProp from './../reviews-list/reviews-list.prop.js';
import { isAuthorizationStatusReceived } from './../../utils/common';

function App(props) {
  const { reviews, loadingStatus, currentAuthorizationStatus } = props;
  if (!loadingStatus || !isAuthorizationStatusReceived(currentAuthorizationStatus)) {
    return (
      <LoadingPage />
    );
  }
  return (
    <BrowserRouter>
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
          render={(routerProps) => <PropertyPage reviews={reviews} {...routerProps} />}
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
  reviews: reviewsListProp,
  loadingStatus: PropTypes.bool,
  currentAuthorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  loadingStatus: state.isDataLoaded,
  currentAuthorizationStatus: state.authorizationStatus,
});

export { App };
export default connect(mapStateToProps, null)(App);
