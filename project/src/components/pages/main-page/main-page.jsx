import React from 'react';
import Logo from '../../logo/logo';
import CardListTitle from './../../cards/card-list-title/card-list-title';
import MainPageMap from './../../maps/main-page-map/main-page-map';
import MainPageCardList from './../../cards/main-page-card-list/main-page-card-list';
import LocationList from './../../location-list/location-list';
import Sorting from './../../sorting/sorting';

const LOGO_ACTIVE_MODE = true;

function MainPage() {

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
              <CardListTitle />
              <Sorting />
              <MainPageCardList />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <MainPageMap />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
