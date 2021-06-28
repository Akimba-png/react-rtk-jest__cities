import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CardList from '../../cards/card-list/card-list';
import Logo from '../../logo/logo';
import Map from '../../map/map';
import LocationList from './../../location-list/location-list';
import cardListProp from './../../cards/card-list/card-list.prop';
import { CardCssValue } from '../../../const';

const LOGO_ACTIVE_MODE = true;

function MainPage(props) {
  const { city, offers } = props;
  const offerNumber = offers.length;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo logoActiveMode={LOGO_ACTIVE_MODE} />
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="/#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offerNumber} {offerNumber === 1 ? 'place' : 'places'} to stay in {city}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <CardList offers={offers} cardMode={CardCssValue.Main} />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={offers} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

MainPage.propTypes = {
  city: PropTypes.string,
  offers: cardListProp,
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.cityOffers,
});

export { MainPage };
export default connect(mapStateToProps, null)(MainPage);
