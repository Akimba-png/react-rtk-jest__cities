import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CardList from './../cards/card-list/card-list';
import cardOfferProp from './../cards/card/card-offer.prop';
import { changeCity } from './../../store/action';
import { CardCssValue, Index, AppRoute } from './../../const';


function FavoriteItem({ cityOffers }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLinkClick = (evt) => {
    evt.preventDefault();
    dispatch(changeCity(cityOffers[0]));
    history.push(AppRoute.MAIN);
  };

  return (
    <li className="favorites__locations-items" data-testid="favorite-item">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a onClick={handleLinkClick}
            className="locations__item-link"
            href="/#"
          >
            <span>{cityOffers[0]}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <CardList offers={cityOffers[Index.FIRST]} cardMode={CardCssValue.Favorite} />
      </div>
    </li>
  );
}

FavoriteItem.propTypes = {
  cityOffers: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.arrayOf(cardOfferProp).isRequired,
    ]),
  ),
};

export default FavoriteItem;
