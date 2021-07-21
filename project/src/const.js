export const TEST_NUMBER = 23;
export const LOCATIONS = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const Index = {
  FIRST: 1,
  THIRD: 2,
};

export const AppRoute = {
  MAIN: '/',
  LOGIN: '/login',
  FAVORITE: '/favorites',
  PROPERTY: '/offer/:id',
};

export const propertyRoute = {
  getOffer(offerId) {
    return `/hotels/${offerId}`;
  },
  getOfferNearby(offerId) {
    return `/hotels/${offerId}/nearby`;
  },
  getComment(offerId) {
    return `/comments/${offerId}`;
  },
  postComment(offerId) {
    return `/comments/${offerId}`;
  },
};

export const favoriteRoute = {
  postFavoriteStatus(offerId, status) {
    return `/favorite/${offerId}/${status}`;
  },
};

export const ApiRoute = {
  OFFERS: '/hotels',
  LOGIN: '/login',
  LOGOUT: '/logout',
  FAVORITE: '/favorite',
};

export const AuthorizationStatus = {
  AUTH: 'authorised',
  NOT_AUTH: 'not authorised',
  UNKNOWN: 'unknown',
};

export const CardCssValue = {
  Main: {
    TYPE: 'main-card',
    ARTICLE_CLASS_NAME: 'cities__place-card',
    IMAGE_WRAPPER_CLASS_NAME: 'cities__image-wrapper',
    IMAGE_WIDTH: '260',
    IMAGE_HEIGHT: '200',
  },
  Favorite: {
    TYPE: 'favorite-card',
    ARTICLE_CLASS_NAME: 'favorites__card',
    IMAGE_WRAPPER_CLASS_NAME: 'favorites__image-wrapper',
    IMAGE_WIDTH: '150',
    IMAGE_HEIGHT: '110',
    INFO_CLASS_NAME: 'favorites__card-info',
  },
};

export const SortValue = {
  POPULAR: 'Popular',
  PRICE_TO_HIGH: 'Price: low to high',
  PRICE_TO_LOW: 'Price: high to low',
  PRICE_TOP_RATING: 'Top rated first',
};

export const TestData = {
  INCOME_OFFERS: [
    {
      'bedrooms': 3,
      'city': {
        'location': {
          'latitude': 52.370216,
          'longitude': 4.895168,
          'zoom': 10,
        },
        'name': 'Amsterdam',
      },
      'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
      'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
      'host': {
        'avatar_url': 'img/1.png',
        'id': 3,
        'is_pro': true,
        'name': 'Angelina',
      },
      'id': 1,
      'images': ['img/1.png', 'img/2.png'],
      'is_favorite': false,
      'is_premium': false,
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8,
      },
      'max_adults': 4,
      'preview_image': 'img/1.png',
      'price': 120,
      'rating': 4.8,
      'title': 'Beautiful & luxurious studio at great location',
      'type': 'apartment',
    },
  ],
  EXPECTED_OFFERS: [
    {
      bedrooms: 3,
      city: {
        location: {
          latitude: 52.370216,
          longitude: 4.895168,
          zoom: 10,
        },
        name: 'Amsterdam',
      },
      description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
      goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
      host: {
        avatarUrl: 'img/1.png',
        id: 3,
        isPro: true,
        name: 'Angelina',
      },
      id: 1,
      images: ['img/1.png', 'img/2.png'],
      isFavorite: false,
      isPremium: false,
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
      maxAdults: 4,
      previewImage: 'img/1.png',
      price: 120,
      rating: 4.8,
      title: 'Beautiful & luxurious studio at great location',
      type: 'apartment',
    },
  ],
  SERVER_SUCCESSFUL_CODE: 200,
};
