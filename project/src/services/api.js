import axios from 'axios';

const BACKEND_URL = 'https://7.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

export const HttpResponseCode = {
  UNAUTHORIZED: 401,
};

const token = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).token : '';

export const createApi = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'x-token': token,
    },
  });

  const onSuccess = (response) => response;

  const onFail = (error) => {
    const {response} = error;
    if (response.status === HttpResponseCode.UNAUTHORIZED) {
      onUnauthorized();
    }
    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
