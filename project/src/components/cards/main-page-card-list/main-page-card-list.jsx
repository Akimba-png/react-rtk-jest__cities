import React from 'react';
import PropTypes from 'prop-types';
import cardListProp from './../card-list/card-list.prop';
import CardList from './../../cards/card-list/card-list';
import { connect } from 'react-redux';
import { getFilteredOffers } from './../../../store/selectors';
import { ActionCreator } from './../../../store/action';
import { CardCssValue } from './../../../const';

function MainPageCardList(props) {
  const { offers, resetActiveCardId } = props;
  return (
    <div onMouseLeave={resetActiveCardId} className="cities__places-list places__list tabs__content">
      <CardList offers={offers} cardMode={CardCssValue.Main} />
    </div>
  );
}

MainPageCardList.propTypes = {
  offers: cardListProp,
  resetActiveCardId: PropTypes.func,
};

const mapStateToProps = (state) => ({
  offers: getFilteredOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  resetActiveCardId() {
    dispatch(ActionCreator.changeActiveCardId(''));
  },
});

export { MainPageCardList };
export default connect(mapStateToProps, mapDispatchToProps)(MainPageCardList);
