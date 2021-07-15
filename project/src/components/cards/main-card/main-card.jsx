import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../card/card';
import cardOfferProp from './../card/card-offer.prop';
import { CardCssValue } from './../../../const';
import { changeActiveCardId } from './../../../store/action';

function MainCard(props) {
  return <Card cssValue={CardCssValue.Main} {...props} />;
}

MainCard.propTypes = {
  offer: cardOfferProp,
  onChangeActiveCardId: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onChangeActiveCardId(cardId) {
    dispatch(changeActiveCardId(cardId));
  },
});


export {MainCard};
export default connect(null, mapDispatchToProps)(MainCard);
