import React from 'react';
import Card from '../card/card';
import cardOfferProp from './../card/card-offer.prop';
import { CardCssValue } from './../../../const';

function FavoriteCard(props) {
  return <Card cssValue={CardCssValue.Favorite} {...props} />;
}

FavoriteCard.propTypes = {
  offer: cardOfferProp,
};

export default FavoriteCard;
