import React from 'react';
import { useSelector } from 'react-redux';
import Map from './../map/map';
import { getFilteredOffers } from './../../../store/selectors';

function MainPageMap() {
  const offers = useSelector(getFilteredOffers);

  return (
    <Map offers={offers} />
  );
}

export default MainPageMap;
