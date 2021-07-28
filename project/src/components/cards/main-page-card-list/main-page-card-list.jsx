import React from 'react';
import CardList from './../../cards/card-list/card-list';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredOffers } from './../../../store/selectors';
import { changeActiveCardId } from './../../../store/action';
import { CardCssValue } from './../../../const';

function MainPageCardList() {
  const offers = useSelector(getFilteredOffers);
  const dispatch = useDispatch();
  const resetActiveCardId = () => dispatch(changeActiveCardId(null));

  return (
    <div onMouseLeave={resetActiveCardId} className="cities__places-list places__list tabs__content" data-testid="main-page-containter">
      <CardList offers={offers} cardMode={CardCssValue.Main} />
    </div>
  );
}

export default MainPageCardList;
