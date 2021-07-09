import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/app/app';
import { reducer } from './store/reducer';
import { reviews } from './mocks/reviews';
import { createApi } from './services/api';
import { fetchOffersList, checkAuth } from './store/api-actions';
import { ActionCreator } from './store/action';
import { AuthorizationStatus } from './const';

const api = createApi(
  () => store.dispatch(
    ActionCreator
      .requireAuthorization(AuthorizationStatus.NOT_AUTH),
  ),
);

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

store.dispatch(checkAuth());
store.dispatch(fetchOffersList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
