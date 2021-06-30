import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreator } from './../../store/action';
import { LOCATIONS } from './../../const';


function LocationList(props) {
  const { city, changeCity } = props;

  const handleLinkClick = (location) => () => changeCity(location);

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
  changeCity: PropTypes.func,
};

const mapStateToProps = (state) => ({
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export { LocationList };
export default connect(mapStateToProps, mapDispatchToProps)(LocationList);