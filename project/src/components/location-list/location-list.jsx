import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCity } from './../../store/action';
import { LOCATIONS } from './../../const';
import { getActiveCity } from './../../store/app-interaction/selectors';

function LocationList() {
  const city = useSelector(getActiveCity);
  const dispatch = useDispatch();

  const handleLinkClick = (location) =>
    () => dispatch(changeCity(location));

  return (
    <ul className="locations__list tabs__list">
      {LOCATIONS.map((location, index) => {
        const keyValue = `${index}-${location}`;
        return (
          <li className="locations__item" key={keyValue}>
            <a onClick={handleLinkClick(location)} className={`locations__item-link tabs__item ${location === city ? 'tabs__item--active' : ''}`} href="/#">
              <span>{location}</span>
            </a>
          </li>
        );
      })}
    </ul >
  );
}

export default LocationList;
