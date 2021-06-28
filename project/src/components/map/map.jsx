import React, { useEffect, useRef } from 'react';
import useMap from './../../hooks/useMap';
import cardListProp from './../cards/card-list/card-list.prop';
import leaflet from 'leaflet';

const FIRST_ELEMENT_ARRAY_INDEX = 0;

const DeafaultCity = {
  COORDINATES: [21.607654, -78.922648],
  ZOOM: 8,
};

const MapIcon = {
  URL: 'img/pin.svg',
  SIZES: [30, 30],
  ANCHOR_SIZES: [15, 30],
};

function Map(props) {
  const { offers } = props;

  let mapValue;
  if (offers.length !== 0) {
    const cityValue = offers[FIRST_ELEMENT_ARRAY_INDEX].city.location;
    mapValue = {
      cityCoordinates: [cityValue.latitude, cityValue.longitude],
      zoom: cityValue.zoom,
    };
  } else {
    mapValue = {
      cityCoordinates: DeafaultCity.COORDINATES,
      zoom: DeafaultCity.ZOOM,
    };
  }

  const mapRef = useRef(null);
  const map = useMap(mapRef, mapValue);

  useEffect(() => {
    let layerGroup;
    const customIcon = leaflet.icon({
      iconUrl: MapIcon.URL,
      iconSize: MapIcon.SIZES,
      iconAnchor: MapIcon.ANCHOR_SIZES,
    });

    if (map) {
      map.setView(mapValue.cityCoordinates, mapValue.zoom);
      layerGroup = leaflet.layerGroup().addTo(map);
      offers.forEach((offer) => {
        leaflet.marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        }, {
          icon: customIcon,
        }).addTo(layerGroup);
      });
    }

    if (map) {
      return () => layerGroup.clearLayers();
    }
  }, [map, offers, mapValue]);

  return (
    <div style={{ height: '100%' }} ref={mapRef}>
    </div>
  );
}

Map.propTypes = {
  offers: cardListProp,
};

export default Map;
