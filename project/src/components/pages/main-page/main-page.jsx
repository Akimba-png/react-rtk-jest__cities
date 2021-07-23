import React, { useState } from 'react';
import Logo from '../../logo/logo';
import LocationList from './../../location-list/location-list';
import Navigation from './../../navigation/navigation';
import MainPageContainer from './../../main-page-container/main-page-container';
import { LOGO_ACTIVE_MODE } from './../../../const';


function MainPage() {
  const [cityOffersUnavailable, setCityOffersUnavailable] = useState(false);
  return (
    <div className={`page page--gray page--main ${cityOffersUnavailable ? 'page__main--index-empty' : ''}`}>
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
          <MainPageContainer onOffersUnavailable={setCityOffersUnavailable} />
        </div>
      </main>
    </div>
  );
}

export default MainPage;

