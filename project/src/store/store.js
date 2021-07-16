import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './root-reducer';
import { createApi } from './../services/api';
import { requireAuthorization } from './action';
import { AuthorizationStatus } from './../const';
import { redirect } from './middlewares/redirect';

export const api = createApi(
  () => store.dispatch(
    requireAuthorization(AuthorizationStatus.NOT_AUTH),
  ),
);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
