export const ActionType = {
  CHANGE_CITY: 'locationList/changeCity',
  CHANGE_SORTIG: 'sorting/changeSorting',
  CHANGE_ACTIVE_CARD_ID: 'mainCard/changeActiveCardId',
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
};
