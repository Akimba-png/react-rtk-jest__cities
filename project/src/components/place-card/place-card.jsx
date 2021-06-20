import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import placeCardProp from './place-card.prop';
import { convertValueToShare } from './../../utils/common';
import { CardCssValue, AppRoute } from './../../const';

function PlaceCard(props) {

  const { offer, cardMode, onCardMouseOver } = props;

  const {
    isPremium,
    previewImage,
    price,
    isFavorite,
    rating,
    title,
    type,
  } = offer;

  const hanldeActiveCardOnMouseOver = (evt) => {
    if (evt.view.location.pathname !== AppRoute.FAVORITE) {
      onCardMouseOver(offer.id);
    }
  };

  return (
    <article className={CardCssValue[cardMode].ARTICLE_CLASS_NAME}
      onMouseEnter={hanldeActiveCardOnMouseOver}
    >
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={CardCssValue[cardMode].IMAGE_CLASS_NAME}>
        <a href="/#">
          <img className="place-card__image" src={previewImage} width={CardCssValue[cardMode].WIDTH} height={CardCssValue[cardMode].HEIGHT} alt="Visual presentation of the apartments" />
        </a>
      </div>
      <div className={CardCssValue[cardMode].INFO_CLASS_NAME}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{CardCssValue[cardMode].BOOKMARK_STATUS}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${convertValueToShare(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

PlaceCard.propTypes = {
  offer: placeCardProp,
  cardMode: PropTypes.string.isRequired,
  onCardMouseOver: PropTypes.func,
};

export default PlaceCard;
