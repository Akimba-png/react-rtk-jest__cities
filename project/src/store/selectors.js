import { SortOption } from './../utils/common';
import { SortValue } from './../const';

export const getFilteredOffers = (state) => {
  const filteredOffers = state.offers.filter((offer) => offer.city.name === state.city);

  switch (state.sortType) {
    case SortValue.PRICE_TO_HIGH:
      return filteredOffers.slice().sort(SortOption.priceToHigh);
    case SortValue.PRICE_TO_LOW:
      return filteredOffers.slice().sort(SortOption.priceToLow);
    case SortValue.PRICE_TOP_RATING:
      return filteredOffers.slice().sort(SortOption.rating);
    default:
      return filteredOffers;
  }
};
