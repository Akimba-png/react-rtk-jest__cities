export const ActionType = {
  CHANGE_CITY: 'locationList/changeCity',
  CHANGE_SORTIG: 'sorting/changeSorting',
  CHANGE_ACTIVE_CARD_ID: 'mainCard/changeActiveCardId',
  LOAD_OFFERS: 'data/loadOffers',
  REQUIRE_AUTHORIZATION: 'user/requireAuthorization',
  LOGOUT: 'user/logout',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeSorting: (sortType) => ({
    type: ActionType.CHANGE_SORTIG,
    payload: sortType,
  }),
  changeActiveCardId: (cardId) => ({
    type: ActionType.CHANGE_ACTIVE_CARD_ID,
    payload: cardId,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};
