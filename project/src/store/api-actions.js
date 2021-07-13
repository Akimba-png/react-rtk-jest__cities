import { ActionCreator } from './action';
import { ApiRoute, AuthorizationStatus, AppRoute } from './../const';
import { adaptOfferToClient, adaptUserDataToClient } from './../utils/server';

export const fetchOffersList = () => (dispatch, _getState, api) =>
  api.get(ApiRoute.OFFERS)
    .then(({ data }) => data.map(adaptOfferToClient))
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
