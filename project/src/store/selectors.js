export const getFilteredOffers = (state) =>
  state.offers.filter((offer) => offer.city.name === state.city);
