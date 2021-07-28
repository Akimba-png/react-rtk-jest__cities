import React from 'react';
import { useSelector } from 'react-redux';
import { useAsync } from './../../../hooks/useAsync';
import Logo from './../../logo/logo';
import Navigation from './../../navigation/navigation';
import LoadingPage from './../loading-page/loading-page';
import NotFoundPage from './../not-found-page/not-found-page';
import ReviewsList from './../../reviews-list/reviews-list';
import ReviewForm from './../../review-form/review-form';
import Map from './../../maps/map/map';
import CardList from './../../cards/card-list/card-list';
import FavoriteButton from './../../favorite-button/favorite-button';
import { convertValueToShare } from './../../../utils/common';
import { Index, AuthorizationStatus } from './../../../const';
import { getAuthorizationStatus } from './../../../store/user/selectors';

const PLURAL_POSTFIX = 's';
const NOT_FOUND_ERROR = 404;
const MAX_IMAGE_NUMBER = 6;

const FavoriteButtonCssValue = {
  BUTTON_CLASS_NAME: 'property__bookmark-button',
  BUTTON_CLASS_NAME_ACTIVE: 'property__bookmark-button--active',
  SVG_CLASS_NAME: 'property__bookmark-icon',
  SVG_WIDTH: '31',
  SVG_HEIGHT: '33',
};

function PropertyPage() {

  const currentAuthorizationStatus = useSelector(getAuthorizationStatus);
  const {
    propertyData,
    errorStatus,
    setPropertyData,
    offerId,
  } = useAsync();

  if (errorStatus === NOT_FOUND_ERROR) {
    return <NotFoundPage />;
  }

  if (!propertyData) {
    return <LoadingPage />;
  }

  const isAuthorized = currentAuthorizationStatus === AuthorizationStatus.AUTH;

  const handleCommentChange = (comments) => {
    setPropertyData([...propertyData.slice(0, Index.THIRD), comments]);
  };

  const [offer, nearbyOffers, reviews] = propertyData;

  const {
    id,
    images,
    isFavorite,
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

  const reviewsAmount = reviews.length;

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
              {images.slice(0, MAX_IMAGE_NUMBER).map((image, index) => {
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
                <FavoriteButton favoriteStatus={isFavorite} offerId={id} cssValue={FavoriteButtonCssValue} />
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
                {isAuthorized && <ReviewForm reviewsAmount={reviewsAmount} onSendReview={handleCommentChange} offerId={offerId} />}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={[...nearbyOffers, offer]} activeOfferId={id} />
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

export default PropertyPage;
