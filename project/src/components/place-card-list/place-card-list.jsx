import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlaceCard from './../place-card/place-card';
import placeCardListProp from './place-card-list.prop';


function PlaceCardList(props) {
  const { offers, cardMode } = props;
  const [, setActiveCard] = useState({});
  return (
    offers.map((offer) => <PlaceCard offer={offer} cardMode={cardMode} onCardMouseOver={setActiveCard} key={offer.id} />)
  );
}

PlaceCardList.propTypes = {
  offers: placeCardListProp,
  cardMode: PropTypes.string.isRequired,
};

export default PlaceCardList;
