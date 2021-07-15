import { SortOption } from './../utils/common';
import { SortValue } from './../const';

export const getFilteredOffers = (dataStore, interactionStore) => {
  const filteredOffers = dataStore.offers.filter((offer) => offer.city.name === interactionStore.city);

  switch (interactionStore.sortType) {
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
