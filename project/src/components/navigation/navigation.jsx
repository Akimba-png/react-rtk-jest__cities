import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from './../../store/api-actions';
import { AuthorizationStatus, ApiRoute, AppRoute } from './../../const';

const createNavigationTemplate = (authorizationStatus, signOut) => {

  if (authorizationStatus === AuthorizationStatus.AUTH) {

    const userData = JSON.parse(localStorage.getItem('userData'));
    const userDetails = {
      email: userData.email,
      avatar: userData.avatarUrl,
    };

    const handleSignOutButton = (evt) => {
      evt.preventDefault();
      signOut();
    };

    return (
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITE}>
              <div className="header__avatar-wrapper user__avatar-wrapper">
                <img src={userDetails.avatar} alt="user's avatar" />
              </div>
              <span className="header__user-name user__name">{userDetails.email}</span>
            </Link>
          </li>
          <li className="header__nav-item">
            <a onClick={handleSignOutButton} className="header__nav-link" href="/#">
              <span className="header__signout">Sign out</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  } return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={ApiRoute.LOGIN}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__login">Sign in</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};


function Navigation(props) {
  const { authorizationStatus, signOut } = props;
  return createNavigationTemplate(authorizationStatus, signOut);
}

Navigation.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  signOut: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  signOut() {
    dispatch(logout());
  },
});

export { Navigation };
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
