import React from 'react';
import PropTypes from 'prop-types';
import reviewsListProp from './reviews-list.prop';
import ReviewsItem from './../reviews-item/reviews-item';

const DISPLAYED_REVIEWS_AMOUNT = 10;

function ReviewsList({ reviews, reviewsAmount }) {
  const sortedReviews = reviews.slice(-DISPLAYED_REVIEWS_AMOUNT).reverse();
  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsAmount}</span></h2>
      <ul className="reviews__list">
        {sortedReviews.map((review) => {
          const keyValue = review.id;
          return <ReviewsItem review={review} key={keyValue} />;
        })}
      </ul>
    </React.Fragment>
  );
}

ReviewsList.propTypes = {
  reviews: reviewsListProp,
  reviewsAmount: PropTypes.number.isRequired,
};

export default ReviewsList;
