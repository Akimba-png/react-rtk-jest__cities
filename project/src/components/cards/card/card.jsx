import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FavoriteButton from './../../favorite-button/favorite-button';
import cardOfferProp from './card-offer.prop';
import cardCssValueProp from './card-css-value.prop';
import { convertValueToShare } from './../../../utils/common';
import { CardCssValue } from './../../../const';

const DefaultStyle = {
  TYPE: 'property-card',
  ARTICLE_CLASS_NAME: 'near-places__card',
  IMAGE_WRAPPER_CLASS_NAME: 'near-places__image-wrapper',
  IMAGE_WIDTH: 260,
  IMAGE_HEIGHT: 200,
  INFO_CLASS_NAME: '',
};

function Card(props) {
  const { offer, cssValue = DefaultStyle, onChangeActiveCardId } = props;

  const {
    id,
    isPremium,
    previewImage,
    price,
    isFavorite,
    rating,
    title,
    type,
  } = offer;

  const {
    ARTICLE_CLASS_NAME,
    IMAGE_WRAPPER_CLASS_NAME,
    IMAGE_WIDTH,
    IMAGE_HEIGHT,
    INFO_CLASS_NAME = '',
  } = cssValue;

  const hanldeActiveCardIdOnMouseOver = (evt) => {
    if (cssValue.TYPE === CardCssValue.Main.TYPE) {
      onChangeActiveCardId(offer.id);
    }
  };

  return (
    <article className={`${ARTICLE_CLASS_NAME} place-card`}
      onMouseEnter={hanldeActiveCardIdOnMouseOver}
    >
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={`${IMAGE_WRAPPER_CLASS_NAME} place-card__image-wrapper`}>
        <a href="/#">
          <img className="place-card__image" src={previewImage} width={`${IMAGE_WIDTH}`} height={`${IMAGE_HEIGHT}`} alt="Visual presentation of the apartments" />
        </a>
      </div>
      <div className={`${INFO_CLASS_NAME} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton favoriteStatus={isFavorite} offerId={id} />
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

Card.propTypes = {
  offer: cardOfferProp,
  onChangeActiveCardId: PropTypes.func,
  cssValue: cardCssValueProp,
};

export default Card;
