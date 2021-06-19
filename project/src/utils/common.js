const StarRatingValue = {
  TOTAL: 100,
  MAX: 5,
};

function createOrderNumberGenerator() {
  let storage = 0;
  return () => storage++;
}
export const getOrderNumber = createOrderNumberGenerator();

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

export const getRandomDecimal = (min, max, fraction) =>
  Number(((Math.random() * (max - min)) + min).toFixed(fraction));

export const getRandomArrayElement = (array) =>
  array[(getRandomInteger(0, (array.length - 1)))];

export const generateRandomArray = (items) => {
  const randomArray = [];
  for (let i = 0; i < items.length; i++) {
    const item = getRandomArrayElement(items);
    const isItemInclude = randomArray.some((value) => value === item);
    if (!isItemInclude) {
      randomArray.push(item);
    } else {
      i--;
    }
  }
  randomArray.length = getRandomInteger(1, items.length);
  return randomArray;
};

export const getRandomBoolean = () => Math.random() >= 0.5;

export const convertValueToShare = (currentValue) =>
  (currentValue / StarRatingValue.MAX) * StarRatingValue.TOTAL;

