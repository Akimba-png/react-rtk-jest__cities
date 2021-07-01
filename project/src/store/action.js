export const ActionType = {
  CHANGE_CITY: 'locationList/changeCity',
  CHANGE_SORTIG: 'sorting/changeSorting',
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
};
