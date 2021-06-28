import React from 'react';
import PropTypes from 'prop-types';
import cardListProp from './../cards/card-list/card-list.prop';
import { connect } from 'react-redux';
import { ActionCreator } from './../../store/action';
import { LOCATIONS } from './../../const';

function LocationList(props) {
  const { offers, changeCity, city } = props;
  return (
    <ul className="locations__list tabs__list">
      {LOCATIONS.map((location, index) => {
        const keyValue = `${index}-${location}`;
        return (
          <li className="locations__item" key={keyValue}>
            <a onClick={
              () => changeCity(offers, location)
            } className={`locations__item-link tabs__item ${location === city ? 'tabs__item--active' : ''}`} href="/#"
            >
              <span>{location}</span>
            </a>
          </li>
        );
      })}
    </ul >
  );
}

LocationList.propTypes = {
  offers: cardListProp,
  changeCity: PropTypes.func,
  city: PropTypes.string,
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(offers, city) {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.filterOffer(offers, city));
  },
});

export { LocationList };
export default connect(mapStateToProps, mapDispatchToProps)(LocationList);
