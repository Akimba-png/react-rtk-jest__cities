import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './reducer';
import { createApi } from './../services/api';
import { ActionCreator } from './action';
import { AuthorizationStatus } from './../const';
import { redirect } from './middlewares/redirect';

export const api = createApi(
  () => store.dispatch(
    ActionCreator
      .requireAuthorization(AuthorizationStatus.NOT_AUTH),
  ),
);

export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);
