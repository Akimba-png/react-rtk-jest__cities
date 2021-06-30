import React from 'react';
import cardListProp from './../card-list/card-list.prop';
import CardList from './../../cards/card-list/card-list';
import { connect } from 'react-redux';
import { getFilteredOffers } from './../../../store/selectors';
import { CardCssValue } from './../../../const';

function MainPageCardList(props) {
  const {offers} = props;
  return (
    <CardList offers={offers} cardMode={CardCssValue.Main} />
  );
}

MainPageCardList.propTypes = {
  offers: cardListProp,
};

const mapStateToProps = (state) => ({
  offers: getFilteredOffers(state),
});

export { MainPageCardList };
export default connect(mapStateToProps, null)(MainPageCardList);
