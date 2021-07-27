import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { api } from './../store/store';
import { propertyRoute } from './../const';
import { adaptOfferToClient, adaptCommentToClient } from './../utils/server';
import { changeErrorStatus } from './../store/action';

const URL_PREFIX = '/offer/';

function useAsync() {
  const [propertyData, setPropertyData] = useState(null);
  const [errorStatus, setErrorStatus] = useState(null);
  const dispatch = useDispatch();
  const offerId = useHistory().location.pathname.replace(URL_PREFIX, '');

  useEffect(() => {
    Promise.all([
      api.get(propertyRoute.getOffer(offerId))
        .then(({ data }) => adaptOfferToClient(data)),
      api.get(propertyRoute.getOfferNearby(offerId))
        .then(({ data }) => data.map(adaptOfferToClient)),
      api.get(propertyRoute.getComment(offerId))
        .then(({ data }) => data.map(adaptCommentToClient)),
    ]).then((data) => setPropertyData(data))
      .catch((error) => {
        if (!error.response) {
          return dispatch(changeErrorStatus());
        }
        setErrorStatus(error.response.status);
      });
  }, [offerId, dispatch]);

  return { propertyData, errorStatus, setPropertyData, offerId };
}

export { useAsync };
