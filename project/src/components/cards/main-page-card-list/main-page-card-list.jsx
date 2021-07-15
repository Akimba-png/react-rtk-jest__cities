import React from 'react';
import PropTypes from 'prop-types';
import cardListProp from './../card-list/card-list.prop';
import CardList from './../../cards/card-list/card-list';
import { connect } from 'react-redux';
import { getFilteredOffers } from './../../../store/selectors';
import { changeActiveCardId } from './../../../store/action';
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

const mapStateToProps = ({DATA, INTERACTION}) => ({
  offers: getFilteredOffers(DATA, INTERACTION),
});

const mapDispatchToProps = (dispatch) => ({
  resetActiveCardId() {
    dispatch(changeActiveCardId(null));
  },
});

export { MainPageCardList };
export default connect(mapStateToProps, mapDispatchToProps)(MainPageCardList);
