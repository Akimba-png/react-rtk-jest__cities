import React from 'react';
import reviewsListProp from './reviews-list.prop';
import ReviewsItem from './../reviews-item/reviews-item';

const getReviewsAmount = (reviews) => reviews.length;

function ReviewsList({ reviews }) {
  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{getReviewsAmount(reviews)}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => {
          const keyValue = review.id;
          return <ReviewsItem review={review} key={keyValue} />;
        })}
      </ul>
    </React.Fragment>
  );
}

ReviewsList.propTypes = {
  reviews: reviewsListProp,
};

export default ReviewsList;
