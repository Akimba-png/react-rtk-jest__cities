import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Logo({ logoActiveMode }) {
  if (logoActiveMode) {
    return (
      <div className="header__left">
        <Link className="header__logo-link header__logo-link--active test" to="/#">
          <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
        </Link>
      </div>
    );
  }
  return (
    <div className="header__left">
      <Link className="header__logo-link" to="/">
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
      </Link>
    </div>
  );
}

Logo.propTypes = {
  logoActiveMode: PropTypes.bool,
};

export default Logo;
