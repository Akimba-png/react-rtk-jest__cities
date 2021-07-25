import { AuthorizationStatus } from './../const';

const ERROR_MESSAGE_SHOW_TIME = 2000;

export const isAuthorizationStatusReceived = (currentAuthorizationStatus) =>
  currentAuthorizationStatus !== AuthorizationStatus.UNKNOWN;

export const adaptOfferToClient = (offer) => {
  const adaptedOffer = Object.assign(
    {},
    offer,
    {
      previewImage: offer.preview_image,
      isFavorite: offer.is_favorite,
      isPremium: offer.is_premium,
      maxAdults: offer.max_adults,
      host: Object.assign(
        {},
        offer.host,
        {
          avatarUrl: offer.host.avatar_url,
          isPro: offer.host.is_pro,
        },
      ),
    },
  );
  delete adaptedOffer.preview_image;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.host.avatar_url;
  delete adaptedOffer.host.is_pro;
  return adaptedOffer;
};

export const adaptUserDataToClient = (userData) => {
  const adaptedUserData = Object.assign(
    {},
    userData,
    {
      avatarUrl: userData.avatar_url,
      isPro: userData.is_pro,
    },
  );
  delete adaptedUserData.avatar_url;
  delete adaptedUserData.is_pro;
  return adaptedUserData;
};

export const adaptCommentToClient = (comment) => {
  const adaptedComment = Object.assign(
    {},
    comment,
    {
      user: Object.assign(
        {},
        comment.user,
        {
          avatarUrl: comment.user.avatar_url,
          isPro: comment.user.is_pro,
        },
      ),
    },
  );
  delete adaptedComment.user.avatar_url;
  delete adaptedComment.user.is_pro;
  return adaptedComment;
};

export const toggleErrorStatus = (setStatus) => {
  setStatus((prevState) => !prevState);
  setTimeout(() => {
    setStatus((prevState) => !prevState);
  }, ERROR_MESSAGE_SHOW_TIME);
};
