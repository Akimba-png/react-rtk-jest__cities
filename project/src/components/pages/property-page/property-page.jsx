import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Logo from './../../logo/logo';
import Navigation from './../../navigation/navigation';
import LoadingPage from './../loading-page/loading-page';
import ReviewsList from './../../reviews-list/reviews-list';
import ReviewForm from './../../review-form/review-form';
import Map from './../../maps/map/map';
import CardList from './../../cards/card-list/card-list';
import { convertValueToShare } from './../../../utils/common';
import { adaptOfferToClient, adaptCommentToClient } from './../../../utils/server';
import { propertyRoute } from './../../../const';
import { api } from './../../../store/store';

const PLURAL_POSTFIX = 's';

function PropertyPage(props) {
  const { match } = props;

  const [propertyData, setPropertyData] = useState(null);
  const offerId = match.params.id;

  useEffect(() => {
    Promise.all([
      api.get(propertyRoute.getOffer(offerId))
        .then(({ data }) => adaptOfferToClient(data)),
      api.get(propertyRoute.getOfferNearby(offerId))
        .then(({ data }) => data.map(adaptOfferToClient)),
      api.get(propertyRoute.getComment(offerId))
        .then(({ data }) => data.map(adaptCommentToClient)),
    ]).then((data) => setPropertyData(data));
  }, [offerId]);

  if (!propertyData) {
    return <LoadingPage />;
  }

  const [offer, nearbyOffers, reviews] = propertyData;

  const {
    images,
    isPremium,
    title,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
  } = offer;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <Navigation />
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image, index) => {
                const keyValue = `${index}-${image}`;
                return (
                  <div key={keyValue} className="property__image-wrapper">
                    <img className="property__image" src={image} alt="Visual presentation of the apartments" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && <div className="property__mark"><span>Premium</span></div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${convertValueToShare(rating)}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {`${bedrooms} Bedroom${bedrooms > 1 ? PLURAL_POSTFIX : ''}`}
                </li>
                <li className="property__feature property__feature--adults">
                  {`Max ${maxAdults} adult${maxAdults > 1 ? PLURAL_POSTFIX : ''}`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good, index) => {
                    const keyValue = `${index}-${good}`;
                    return (
                      <li key={keyValue} className="property__inside-item">
                        {good}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${host.isPro ? 'property__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {
                    host.isPro &&
                    <span className="property__user-status">
                      Pro
                    </span>
                  }
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList reviews={reviews} />
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={nearbyOffers} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <CardList offers={nearbyOffers} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

PropertyPage.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
    path: PropTypes.string,
    url: PropTypes.string,
  }),
};

export default PropertyPage;
