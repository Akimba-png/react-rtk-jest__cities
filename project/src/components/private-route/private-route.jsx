import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AuthorizationStatus, AppRoute } from './../../const';
import { getAuthorizationStatus } from './../../store/user/selectors';

function PrivateRoute(props) {
  const { exact, path, render } = props;
  const authorizationStatus = useSelector(getAuthorizationStatus);
  return (
    <Route path={path} exact={exact} render={() => (
      authorizationStatus === AuthorizationStatus.AUTH ? render() : <Redirect to={AppRoute.LOGIN} />
    )}
    >
    </Route>
  );
}

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
