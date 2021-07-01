import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../card/card';
import cardOfferProp from './../card/card-offer.prop';
import { CardCssValue } from './../../../const';
import { ActionCreator } from './../../../store/action';

function MainCard(props) {
  return <Card cssValue={CardCssValue.Main} {...props} />;
}

MainCard.propTypes = {
  offer: cardOfferProp,
  changeActiveCardId: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeActiveCardId(cardId) {
    dispatch(ActionCreator.changeActiveCardId(cardId));
  },
});


export {MainCard};
export default connect(null, mapDispatchToProps)(MainCard);
