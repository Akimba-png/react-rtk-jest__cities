export const AppRoute = {
  MAIN: '/',
  LOGIN: '/login',
  FAVORITE: '/favorites',
  PROPERTY: '/offer/:id',
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

export const LOCATIONS = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
