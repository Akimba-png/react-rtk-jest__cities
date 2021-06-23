import React from 'react';
import reviewsItemProp from './reviews-item.prop';
import dayjs from 'dayjs';
import {convertValueToShare} from './../../utils/common';

const DateFormat = {
  MACHINE: 'YYYY/MM/DD',
  HUMAN: 'MMMM YYYY',
};

const getDate = (date, format) => dayjs(date).format(format);

function ReviewsItem({review}) {
  const {user, rating, comment, date} = review;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${convertValueToShare(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={getDate(date, DateFormat.MACHINE)}>{getDate(date, DateFormat.HUMAN)}</time>
      </div>
    </li>
  );
}

ReviewsItem.propTypes = {
  review: reviewsItemProp,
};

export default ReviewsItem;
