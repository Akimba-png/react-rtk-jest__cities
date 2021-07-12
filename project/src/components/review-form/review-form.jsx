import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getOrderNumber } from '../../utils/common';

const STAR_RATING_NUMBER = 5;

const INITIAL_VALUE = {
  rating: '0',
  review: '',
};

const CommentLength = {
  MIN: 5,
  MAX: 10,
};

function ReviewForm(props) {
  const { onSendReview, commentsLength } = props;
  const [reviewValue, setReviewValue] = useState(INITIAL_VALUE);
  const [sendingStatus, setSendingStatus] = useState(false);
  console.log(sendingStatus)

  useEffect(() => {
    setReviewValue(INITIAL_VALUE);
  }, [commentsLength]);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setReviewValue({
      ...reviewValue,
      [name]: value,
    });
  };

  const handleFormSubmit = async (evt) => {
    setSendingStatus(true);
    evt.preventDefault();
    await onSendReview(reviewValue);
    setSendingStatus(false);
  };

  // if (sendingStatus) {setSendingStatus(false)};
  const toggleSubmitButtonMode = () => {
    const commentLength = reviewValue.review.length;
    const isReviewCorrect = () =>
      // reviewValue.rating > 0 &&
      commentLength >= CommentLength.MIN
      && commentLength <= CommentLength.MAX;
    return isReviewCorrect() && !sendingStatus ? false : true;
  };

  return (
    <form className="reviews__form form" action="#" method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {new Array(STAR_RATING_NUMBER).fill(null).map((_, index, array) => {
          const keyValue = getOrderNumber();
          return (
            <React.Fragment key={keyValue}>
              <input onChange={handleInputChange}
                className="form__rating-input visually-hidden"
                name="rating" value={`${array.length - index}`}
                id={`${array.length - index}-stars`} type="radio"
                checked={reviewValue.rating === (`${array.length - index}`) ? true : ''}
                disabled={sendingStatus}
              />
              <label htmlFor={`${array.length - index}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </React.Fragment>
          );
        })}
      </div>
      <textarea onChange={handleInputChange} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" disabled={sendingStatus} value={reviewValue.review}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button onClick={toggleSubmitButtonMode} className="reviews__submit form__submit button" type="submit" disabled={toggleSubmitButtonMode()}>Submit</button>
      </div>
    </form>
  );
}

ReviewForm.propTypes = {
  onSendReview: PropTypes.func.isRequired,
  commentsLength: PropTypes.number.isRequired,
};

export default ReviewForm;
