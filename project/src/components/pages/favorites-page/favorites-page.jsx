import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../../logo/logo';
import Navigation from './../../navigation/navigation';
import CardList from '../../cards/card-list/card-list';
import cardListProp from './../../cards/card-list/card-list.prop';
import { AppRoute, CardCssValue } from './../../../const';

function FavoritesPage(props) {
  const { offers } = props;
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <Navigation />
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="/#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <CardList offers={favoriteOffers} cardMode={CardCssValue.Favorite} />
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.MAIN}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

FavoritesPage.propTypes = {
  offers: cardListProp,
};

const mapStateToProps = ({DATA}) => ({
  offers: DATA.offers,
});

export { FavoritesPage };
export default connect(mapStateToProps, null)(FavoritesPage);
