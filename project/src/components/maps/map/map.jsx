import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import useMap from './../../../hooks/useMap';
import cardListProp from './../../cards/card-list/card-list.prop';
import leaflet from 'leaflet';
import { getActiveCardId } from './../../../store/app-interaction/selectors';

const FIRST_ELEMENT_ARRAY_INDEX = 0;

const DeafaultCity = {
  COORDINATES: [21.607654, -78.922648],
  ZOOM: 8,
};

const MapIcon = {
  URL: 'img/pin.svg',
  ACTIVE_URL: 'img/pin-active.svg',
  SIZES: [30, 30],
  ANCHOR_SIZES: [15, 30],
};

function Map(props) {
  const { offers } = props;
  const activeCardId = useSelector(getActiveCardId);

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

    const activeCustomIcon = leaflet.icon({
      iconUrl: MapIcon.ACTIVE_URL,
      iconSize: MapIcon.SIZES,
      iconAnchor: MapIcon.ANCHOR_SIZES,
    });

    if (map) {
      map.setView(mapValue.cityCoordinates, mapValue.zoom);
      layerGroup = leaflet.layerGroup().addTo(map);
      offers.forEach((offer) => {
        const iconType = offer.id === activeCardId ? activeCustomIcon : customIcon;
        leaflet.marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        }, {
          icon: iconType,
        }).addTo(layerGroup);
      });
    }

    if (map) {
      return () => layerGroup.clearLayers();
    }
  }, [map, offers, mapValue, activeCardId]);

  return (
    <div style={{ height: '100%' }} ref={mapRef}>
    </div>
  );
}

Map.propTypes = {
  offers: cardListProp,
};

export default Map;
