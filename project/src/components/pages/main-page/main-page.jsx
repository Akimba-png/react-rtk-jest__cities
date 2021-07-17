import React from 'react';
import Logo from '../../logo/logo';
import CardListTitle from './../../cards/card-list-title/card-list-title';
import MainPageMap from './../../maps/main-page-map/main-page-map';
import MainPageCardList from './../../cards/main-page-card-list/main-page-card-list';
import LocationList from './../../location-list/location-list';
import Sorting from './../../sorting/sorting';
import Navigation from './../../navigation/navigation';
import MainPageEmpty from './../../main-page-empty/main-page-empty';
import { useSelector } from 'react-redux';
import { getFilteredOffers } from '../../../store/selectors';

const LOGO_ACTIVE_MODE = true;

function MainPage() {
  const isCityOffersAvailable = useSelector(getFilteredOffers).length !== 0;

  return (
    <div className={`page page--gray page--main ${!isCityOffersAvailable ? 'page__main--index-empty' : ''}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo logoActiveMode={LOGO_ACTIVE_MODE} />
            <Navigation />
          </div>
        </div>
      </header>

      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList />
          </section>
        </div>
        <div className="cities">
          {!isCityOffersAvailable ? <MainPageEmpty /> :
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
            </div>}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
