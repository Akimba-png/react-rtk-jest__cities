import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeCity } from './../../store/action';
import { LOCATIONS } from './../../const';
import { getActiveCity } from './../../store/app-interaction/selectors';


function LocationList(props) {
  const { city, onChangeCity } = props;

  const handleLinkClick = (location) => () => onChangeCity(location);

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

LocationList.propTypes = {
  city: PropTypes.string,
  onChangeCity: PropTypes.func,
};

const mapStateToProps = (state) => ({
  city: getActiveCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(changeCity(city));
  },
});

export { LocationList };
export default connect(mapStateToProps, mapDispatchToProps)(LocationList);
