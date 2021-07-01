const StarRatingValue = {
  TOTAL: 100,
  MAX: 5,
};

function createOrderNumberGenerator() {
  let storage = 0;
  return () => storage++;
}
export const getOrderNumber = createOrderNumberGenerator();

export const convertValueToShare = (currentValue) =>
  (currentValue / StarRatingValue.MAX) * StarRatingValue.TOTAL;

export const SortOption = {
  priceToHigh: (offerA, offerB) => offerA.price - offerB.price,
  priceToLow:(offerA, offerB) => offerB.price - offerA.price,
  rating: (offerA, offerB) => offerB.rating - offerA.rating,
};
