import React from 'react';
import { useDispatch } from 'react-redux';
import Card from '../card/card';
import cardOfferProp from './../card/card-offer.prop';
import { CardCssValue } from './../../../const';
import { changeActiveCardId } from './../../../store/action';

function MainCard(props) {
  const dispatch = useDispatch();
  const onChangeActiveCardId = (cardId) =>
    dispatch(changeActiveCardId(cardId));

  return <Card cssValue={CardCssValue.Main} onChangeActiveCardId={onChangeActiveCardId} {...props} />;
}

MainCard.propTypes = {
  offer: cardOfferProp,
};

export default MainCard;
