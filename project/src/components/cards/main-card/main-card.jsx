import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import cardOfferProp from './../card/card-offer.prop';
import { CardCssValue } from '../../../const';

function MainCard(props) {
  return <Card cssValue={CardCssValue.Main} {...props} />;
}

MainCard.propTypes = {
  offer: cardOfferProp,
  onCardMouseOver: PropTypes.func,
};

export default MainCard;
