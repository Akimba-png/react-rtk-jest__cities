import { ApiRoute, AuthorizationStatus, AppRoute } from './../const';
import { ActionCreator } from './action';

const adaptToClient = (offer) => {
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

const adaptUserDataToClient = (userData) => {
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

export const fetchOffersList = () => (dispatch, _getState, api) =>
  api.get(ApiRoute.OFFERS)
    .then(({ data }) => data.map(adaptToClient))
    .then((offers) => dispatch(ActionCreator.loadOffers(offers)));

export const checkAuth = () => (dispatch, _getState, api) =>
  api.get(ApiRoute.LOGIN)
    .then(() =>
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => { });

export const login = ({ email, password }) => (dispatch, _getState, api) =>
  api.post(ApiRoute.LOGIN, { email, password })
    .then(({ data }) => adaptUserDataToClient(data))
    .then((userData) => localStorage.setItem('userData', JSON.stringify(userData)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirect(AppRoute.MAIN)));


export const logout = () => (dispatch, _getState, api) =>
  api.delete(ApiRoute.LOGOUT)
    .then(() => localStorage.removeItem('userData'))
    .then(() => dispatch(ActionCreator.logout()));
