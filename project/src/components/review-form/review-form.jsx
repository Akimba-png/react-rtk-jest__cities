import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { api } from './../../store/store';
import { getOrderNumber } from '../../utils/common';
import { adaptCommentToClient } from './../../utils/server';
import { propertyRoute } from './../../const';

const STAR_RATING_NUMBER = 5;
const ERROR_DISPLAY_TIME = 3000;
const ERROR_MESSAGE = 'Server isn`t available. Try again later';

const INITIAL_VALUE = {
  rating: '0',
  review: '',
};

const CommentLength = {
  MIN: 50,
  MAX: 300,
};

function ReviewForm(props) {
  const { onSendReview, reviewsAmount, offerId } = props;

  const [reviewValue, setReviewValue] = useState(INITIAL_VALUE);
  const [sendingStatus, setSendingStatus] = useState(false);
  const [commentError, setCommentError] = useState(false);

  useEffect(() => {
    let cleanUpFunction = false;
    if (!cleanUpFunction) {
      setReviewValue(INITIAL_VALUE);
    }
    return () => cleanUpFunction = true;
  }, [reviewsAmount]);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setReviewValue({
      ...reviewValue,
      [name]: value,
    });
  };

  const sendReview = ({ rating, review: comment }) => {
    setSendingStatus(true);
    api.post(propertyRoute.postComment(offerId), { rating, comment })
      .then(({ data }) => data.map(adaptCommentToClient))
      .then(onSendReview)
      .then(() => setSendingStatus(false))
      .catch(() => {
        setSendingStatus(false);
        setCommentError(true);
        setTimeout(
          () => setCommentError(false),
          ERROR_DISPLAY_TIME,
        );
      });
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    sendReview(reviewValue);
  };

  const toggleSubmitButtonMode = () => {
    const commentLength = reviewValue.review.length;
    const isReviewCorrect = () =>
      reviewValue.rating > 0
      && commentLength >= CommentLength.MIN
      && commentLength <= CommentLength.MAX;
    return !(isReviewCorrect() && !sendingStatus);
  };


  return (
    <form
      onSubmit={handleFormSubmit}
      className="reviews__form form"
      action="#" method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {new Array(STAR_RATING_NUMBER).fill(null).map((_, index, array) => {
          const keyValue = getOrderNumber();
          return (
            <React.Fragment key={keyValue}>
              <input
                onChange={handleInputChange}
                value={`${array.length - index}`}
                id={`${array.length - index}-stars`} type="radio"
                checked={reviewValue.rating === (`${array.length - index}`) ? true : ''}
                disabled={sendingStatus}
                className="form__rating-input visually-hidden"
                name="rating"
              />
              <label
                htmlFor={`${array.length - index}-stars`}
                className="reviews__rating-label form__rating-label"
                title="perfect"
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </React.Fragment>
          );
        })}
      </div>
      <textarea
        onChange={handleInputChange}
        className="reviews__textarea form__textarea"
        id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        disabled={sendingStatus}
        value={reviewValue.review}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button onClick={toggleSubmitButtonMode} className="reviews__submit form__submit button" type="submit" disabled={toggleSubmitButtonMode()}>Submit</button>
      </div>
      {commentError && <p>{ERROR_MESSAGE}</p>}
    </form>
  );
}

ReviewForm.propTypes = {
  onSendReview: PropTypes.func.isRequired,
  reviewsAmount: PropTypes.number.isRequired,
  offerId: PropTypes.string.isRequired,
};

export default ReviewForm;
