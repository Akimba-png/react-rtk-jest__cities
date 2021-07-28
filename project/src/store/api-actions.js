import { loadOffers, requireAuthorization, logout as closeSession, redirect, changeErrorStatus } from './action';
import { ApiRoute, favoriteRoute, AuthorizationStatus, AppRoute, Index } from './../const';
import { adaptOfferToClient, adaptUserDataToClient, toggleErrorStatus } from './../utils/server';


export const fetchOffersList = () => (dispatch, _getState, api) =>
  api.get(ApiRoute.OFFERS)
    .then(({ data }) => data.map(adaptOfferToClient))
    .then((offers) => dispatch(loadOffers(offers)))
    .catch((error) => {
      if (!error.response) {
        dispatch(changeErrorStatus());
      }
    });

export const setFavoriteStatus = (offerId, status, handleFavoriteStatus, setErrorStatus) => (dispatch, getState, api) =>
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
    .then(handleFavoriteStatus)
    .catch(() => toggleErrorStatus(setErrorStatus));

export const checkAuth = () => (dispatch, _getState, api) =>
  api.get(ApiRoute.LOGIN)
    .then(() =>
      dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((error) => {
      if (!error.response) {
        dispatch(changeErrorStatus());
      }
    });

export const login = ({ email, password }, setStatus) => (dispatch, _getState, api) =>
  api.post(ApiRoute.LOGIN, { email, password })
    .then(({ data }) => adaptUserDataToClient(data))
    .then((userData) => {
      localStorage.setItem('userData', JSON.stringify(userData));
      api.defaults.headers['x-token'] = userData.token;
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirect(AppRoute.MAIN)))
    .catch(() => toggleErrorStatus(setStatus));

export const logout = (setStatus) => (dispatch, getState, api) =>
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
    })
    .catch(() => toggleErrorStatus(setStatus));
