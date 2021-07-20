import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getFilteredOffers } from './../../store/selectors';
import MainPageEmpty from './../main-page-empty/main-page-empty';
import CardListTitle from './../cards/card-list-title/card-list-title';
import Sorting from './../sorting/sorting';
import MainPageCardList from './../cards/main-page-card-list/main-page-card-list';
import MainPageMap from './../maps/main-page-map/main-page-map';


function MainPageContainer({ onOffersUnavailable }) {
  const isCityOffersAvailable = useSelector(getFilteredOffers).length !== 0;

  useEffect(() => {
    if (!isCityOffersAvailable) {
      onOffersUnavailable(true);
    }
  });

  return !isCityOffersAvailable ? <MainPageEmpty /> : (
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
  );
}

MainPageContainer.propTypes = {
  onOffersUnavailable: PropTypes.func.isRequired,
};

export default MainPageContainer;
