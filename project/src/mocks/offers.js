import { nanoid } from 'nanoid';
import {
  getRandomInteger,
  getRandomArrayElement,
  generateRandomArray,
  getRandomBoolean,
  getRandomDecimal
} from './../utils/common';

const POSSIBLE_DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.',
];

const POSSIBLE_TITLES = [
  'Beautiful & luxurious studio at great location',
  'Beautiful & luxurious apartment at great location',
  'Nice, cozy, warm big bed apartment',
  'Wood and stone place',
  'White castle',
  'Canal View Prinsengracht',
];

const POSSIBLE_GOODS = ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Wi-Fi', 'Fridge', 'Towels', 'Baby seat'];
const POSSIBLE_HOSTS = ['Bartholomeow', 'Edward ', 'Blackbeard', 'Anny'];
const POSSIBLE_TYPES = ['apartment', 'room', 'house', 'hotel'];

const generatePicture = () => `http://picsum.photos/260/200?r=${Math.random()}`;
const generateAvatar = () => `https://i.pravatar.cc/128?rnd=${Math.random()}`;


const getOffer = () => (
  {
    bedrooms: getRandomInteger(1, 4),
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: getRandomArrayElement(POSSIBLE_DESCRIPTIONS),
    goods: generateRandomArray(POSSIBLE_GOODS, 1, 6),
    host: {
      avatarUrl: generateAvatar(),
      id: nanoid(),
      isPro: getRandomBoolean(),
      name: getRandomArrayElement(POSSIBLE_HOSTS),
    },
    id: nanoid(),
    images: new Array(getRandomInteger(1, 6)).fill(null).map(generatePicture),
    isFavorite: getRandomBoolean(),
    isPremium: getRandomBoolean(),
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: getRandomInteger(1, 4),
    previewImage: generatePicture(),
    price: getRandomInteger(500, 1500),
    rating: getRandomDecimal(1, 5, 1),
    title: getRandomArrayElement(POSSIBLE_TITLES),
    type: getRandomArrayElement(POSSIBLE_TYPES),

  }
);

const offers = new Array(4).fill(null).map(getOffer);

export default offers;
