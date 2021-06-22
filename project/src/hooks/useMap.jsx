import { useState, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MAP_ZOOM = 12;

function useMap(mapRef, cityCoordinates) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {

      const mapTemplate = leaflet.map(mapRef.current, {
        center: cityCoordinates,
        zoom: MAP_ZOOM,
        zoomControl: false,
        marker: true,
      });


      leaflet.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      }).addTo(mapTemplate);

      setMap(mapTemplate);
    }
  }, [mapRef, map, cityCoordinates]);

  return map;
}

export default useMap;
