import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './../../store/api-actions';
import { getAuthorizationStatus } from './../../store/user/selectors';
import { AuthorizationStatus, ApiRoute, AppRoute } from './../../const';

function Navigation() {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();

  if (authorizationStatus === AuthorizationStatus.AUTH) {

    const userData = JSON.parse(localStorage.getItem('userData'));
    const userDetails = {
      email: userData.email,
      avatar: userData.avatarUrl,
    };

    const handleSignOutButton = (evt) => {
      evt.preventDefault();
      dispatch(logout());
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
}

export default Navigation;
