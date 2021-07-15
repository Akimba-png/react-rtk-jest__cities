export const ActionType = {
  CHANGE_CITY: 'locationList/changeCity',
  CHANGE_SORTIG: 'sorting/changeSorting',
  CHANGE_ACTIVE_CARD_ID: 'mainCard/changeActiveCardId',
  LOAD_OFFERS: 'data/loadOffers',
  REQUIRE_AUTHORIZATION: 'user/requireAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT: 'app/redirect',

};

export const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city,
});

export const changeSorting = (sortType) => ({
  type: ActionType.CHANGE_SORTIG,
  payload: sortType,
});

export const changeActiveCardId = (cardId) => ({
  type: ActionType.CHANGE_ACTIVE_CARD_ID,
  payload: cardId,
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRE_AUTHORIZATION,
  payload: status,
});

export const logout = () => ({
  type: ActionType.LOGOUT,
});

export const redirect = (url) => ({
  type: ActionType.REDIRECT,
  payload: url,
});
