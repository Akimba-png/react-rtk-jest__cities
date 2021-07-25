import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: 'appInteraction/changeCity',
  CHANGE_SORTIG: 'appInteraction/changeSorting',
  CHANGE_ACTIVE_CARD_ID: 'appInteraction/changeActiveCardId',
  CHANGE_ERROR_STATUS: 'data/changeErrorStatus',
  LOAD_OFFERS: 'data/loadOffers',
  REQUIRE_AUTHORIZATION: 'user/requireAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT: 'appInteraction/redirect',
};

export const changeCity =
  createAction(ActionType.CHANGE_CITY, (city) => ({
    payload: city,
  }));

export const changeSorting =
  createAction(ActionType.CHANGE_SORTIG, (sortType) => ({
    payload: sortType,
  }));

export const changeActiveCardId =
  createAction(ActionType.CHANGE_ACTIVE_CARD_ID, (cardId) => ({
    payload: cardId,
  }));

export const loadOffers =
  createAction(ActionType.LOAD_OFFERS, (offers) => ({
    payload: offers,
  }));

export const requireAuthorization =
  createAction(ActionType.REQUIRE_AUTHORIZATION, (status) => ({
    payload: status,
  }));

export const logout = createAction(ActionType.LOGOUT);

export const redirect =
createAction(ActionType.REDIRECT, (url) => ({
  payload: url,
}));

export const changeErrorStatus =
createAction(ActionType.CHANGE_ERROR_STATUS);
