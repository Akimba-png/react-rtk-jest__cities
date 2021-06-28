export const ActionType = {
  CHANGE_CITY: 'locationList/changeCity',
  FILTER_OFFER_LIST: 'locationList/filterOfferList',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  filterOffer: (offers, city) => {
    const filteredOffers = offers.filter((offer) => offer.city.name === city);
    return {
      type: ActionType.FILTER_OFFER_LIST,
      payload: filteredOffers,
    };
  },
};
