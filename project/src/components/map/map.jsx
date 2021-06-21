import React, {useRef} from 'react';
import useMap from './../../hooks/useMap';

function Map({city}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  return (
    <div style={{height: '100%'}} ref={mapRef}>
    </div>
  );
}

export default Map;
