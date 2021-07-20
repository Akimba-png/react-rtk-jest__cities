import { loadOffers, requireAuthorization, logout as closeSession, redirect } from './action';
import { ApiRoute, favoriteRoute, AuthorizationStatus, AppRoute, Index } from './../const';
import { adaptOfferToClient, adaptUserDataToClient } from './../utils/server';

export const fetchOffersList = () => (dispatch, _getState, api) =>
  api.get(ApiRoute.OFFERS)
    .then(({ data }) => data.map(adaptOfferToClient))
    .then((offers) => dispatch(loadOffers(offers)));

export const setFavoriteStatus = (offerId, status, handleFavoriteStatus) => (dispatch, getState, api) =>
  api.post(favoriteRoute.postFavoriteStatus(offerId, status))
    .then(({ data }) => adaptOfferToClient(data))
    .then((offer) => {
      const offers = getState().DATA.offers;
      const updatedOffers = [
        ...offers.slice(0, offerId - Index.FIRST),
        offer,
        ...offers.slice(offerId, offerId.length),
      ];
      dispatch(loadOffers(updatedOffers));
    })
    .then(handleFavoriteStatus);

export const checkAuth = () => (dispatch, _getState, api) =>
  api.get(ApiRoute.LOGIN)
    .then(() =>
      dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => { });

export const login = ({ email, password }) => (dispatch, _getState, api) =>
  api.post(ApiRoute.LOGIN, { email, password })
    .then(({ data }) => adaptUserDataToClient(data))
    .then((userData) => localStorage.setItem('userData', JSON.stringify(userData)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirect(AppRoute.MAIN)));

export const logout = () => (dispatch, getState, api) =>
  api.delete(ApiRoute.LOGOUT)
    .then(() => localStorage.removeItem('userData'))
    .then(() => dispatch(closeSession()))
    .then(() => {
      const offers = getState().DATA.offers.map((offer) => (
        {
          ...offer,
          isFavorite: false,
        }
      ));
      dispatch(loadOffers(offers));
    });
