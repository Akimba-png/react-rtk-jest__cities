import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import useMap from './../../hooks/useMap';
import cardListProp from './../cards/card-list/card-list.prop';
import leaflet from 'leaflet';

const MapIcon = {
  URL: 'img/pin.svg',
  SIZES: [30, 30],
  ANCHOR_SIZES: [15, 30],
};

function Map({ offers, cityCoordinates }) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityCoordinates);

  useEffect(() => {

    const customIcon = leaflet.icon({
      iconUrl: MapIcon.URL,
      iconSize: MapIcon.SIZES,
      iconAnchor: MapIcon.ANCHOR_SIZES,
    });

    if (map) {
      offers.forEach((offer) => {
        leaflet.marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        }, {
          icon: customIcon,
        }).addTo(map);
      });
    }
  }, [map, offers]);

  return (
    <div style={{ height: '100%' }} ref={mapRef}>
    </div>
  );
}

Map.propTypes = {
  offers: cardListProp,
  cityCoordinates: PropTypes.arrayOf(PropTypes.number.isRequired),
};

export default Map;
