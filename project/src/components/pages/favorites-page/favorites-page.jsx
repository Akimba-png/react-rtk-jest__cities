import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../../logo/logo';
import Navigation from './../../navigation/navigation';
import FavoriteItem from './../../favorite-item/favorite-item';
import LoadingPage from './../loading-page/loading-page';
import FavoriteEmpty from './../../favorite-empty/favorite-empty';
import { api } from './../../../store/store';
import { changeErrorStatus } from './../../../store/action';
import { adaptOfferToClient } from './../../../utils/server';
import { AppRoute, ApiRoute } from './../../../const';


function FavoritesPage() {
  const [favoriteOffers, setFavoriteOffers] = useState(null);
  const dispatch = useDispatch();

  const sortOffers = (offers) =>
    offers.reduce((sortedOfferBlock, offer) => {
      sortedOfferBlock[offer.city.name] = [...(sortedOfferBlock[offer.city.name] || []), offer];
      return sortedOfferBlock;
    }, {});

  useEffect(() => {
    api(ApiRoute.FAVORITE)
      .then(({ data }) => data.map(adaptOfferToClient))
      .then(sortOffers)
      .then((sortedOfferBlock) => setFavoriteOffers(Object.entries(sortedOfferBlock)))
      .catch(() => dispatch(changeErrorStatus()));
  }, [dispatch]);

  if (!favoriteOffers) {
    return <LoadingPage />;
  }

  const isFavoriteOffersSaved = favoriteOffers.length > 0;

  return (
    <div className={`${isFavoriteOffersSaved ? '' : 'page--favorites-empty'} page`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <Navigation />
          </div>
        </div>
      </header>

      {!isFavoriteOffersSaved ? <FavoriteEmpty /> :
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {favoriteOffers.map((cityOffers, index) => {
                  const keyValue = `${index}-${cityOffers[0]}`;
                  return <FavoriteItem key={keyValue} cityOffers={cityOffers} />;
                })}
              </ul>
            </section>
          </div>
        </main>}
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.MAIN}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesPage;
