import React from 'react';
import { useSelector } from 'react-redux';
import { getFilteredOffers } from './../../../store/selectors';
import {Index} from './../../../const';
import { getActiveCity } from './../../../store/app-interaction/selectors';

function CardListTitle() {
  const city = useSelector(getActiveCity);
  const offers = useSelector(getFilteredOffers);
  const offerNumber = offers.length;

  return (
    <b className="places__found">{offerNumber} {offerNumber === Index.FIRST ? 'place' : 'places'} to stay in {city}</b>
  );
}

export default CardListTitle;
