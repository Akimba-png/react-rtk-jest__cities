import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AuthorizationStatus, AppRoute } from './../../const';

function PrivateRoute(props) {
  const { exact, path, render, authorizationStatus } = props;
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
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

export { PrivateRoute };
export default connect(mapStateToProps, null)(PrivateRoute);
