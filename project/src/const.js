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
