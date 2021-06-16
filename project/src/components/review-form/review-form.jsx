import React, { useState } from 'react';
import { getOrderNumber } from '../../utils/common';

const STAR_RATING_NUMBER = 5;

function ReviewForm() {
  const [reviewValue, setReviewValue] = useState(
    {
      rating: 0,
      comment: '',
    },
  );

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const textAreaElement = evt.target.querySelector('.reviews__textarea');
    const radioElements = Array.from(evt.target.querySelectorAll('.form__rating-input'));
    const CheckedRadioElement = radioElements.find((radioElement) => radioElement.checked);
    const currentRating = CheckedRadioElement ? CheckedRadioElement.value : reviewValue.rating;
    setReviewValue({ ...reviewValue, rating: currentRating, comment: textAreaElement.value });
    textAreaElement.value = '';
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
              <input className="form__rating-input visually-hidden" name="rating" value={`${array.length - index}`} id={`${array.length - index}-stars`} type="radio" />
              <label htmlFor={`${array.length - index}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </React.Fragment>
          );
        })}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
