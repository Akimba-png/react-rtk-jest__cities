import { SortOption } from './../utils/common';
import { SortValue } from './../const';
import { createSelector } from 'reselect';
import { getOffers } from './app-data/selectors';
import { getActiveCity } from './app-interaction/selectors';
import { getActiveSortType } from './app-interaction/selectors';

export const getFilteredOffers = createSelector(
  [getOffers, getActiveCity, getActiveSortType],
  (offers, activeCity, activeSortType) => {
    const filteredOffers = offers.filter((offer) => offer.city.name === activeCity);

    switch (activeSortType) {
      case SortValue.PRICE_TO_HIGH:
        return filteredOffers.slice().sort(SortOption.priceToHigh);
      case SortValue.PRICE_TO_LOW:
        return filteredOffers.slice().sort(SortOption.priceToLow);
      case SortValue.PRICE_TOP_RATING:
        return filteredOffers.slice().sort(SortOption.rating);
      default:
        return filteredOffers;
    }
  },
);
