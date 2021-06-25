import React, { useState } from 'react';
import Card from './../card/card';
import MainCard from './../main-card/main-card';
import FavoriteCard from './../favorite-card/favorite-card';
import cardListProp from './card-list.prop';
import cardCssValueProp from './../card/card-css-value.prop';
import { CardCssValue } from '../../../const';

function CardList(props) {
  const { offers, cardMode = {} } = props;
  const [, setActiveCard] = useState({});

  const getCardDependOnType = (offer, type) => {
    switch (type) {
      case CardCssValue.Main.TYPE:
        return <MainCard offer={offer} key={offer.id} onCardMouseOver={setActiveCard} />;
      case CardCssValue.Favorite.TYPE:
        return <FavoriteCard offer={offer} key={offer.id} />;
      default:
        return <Card offer={offer} key={offer.id} />;
    }
  };

  return (
    offers.map((offer) => getCardDependOnType(offer, cardMode.TYPE))
  );
}

CardList.propTypes = {
  offers: cardListProp,
  cardMode: cardCssValueProp,
};

export default CardList;
