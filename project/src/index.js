import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router as BrowserRouter } from 'react-router-dom';
import browserHistory from './browser-history';
import App from './components/app/app';
import { fetchOffersList, checkAuth } from './store/api-actions';
import { store } from './store/store';

store.dispatch(checkAuth());
store.dispatch(fetchOffersList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter history={browserHistory}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
