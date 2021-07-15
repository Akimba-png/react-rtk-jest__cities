import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cardListProp from './../card-list/card-list.prop';
import { getFilteredOffers } from './../../../store/selectors';
import {Index} from './../../../const';

function CardListTitle(props) {
  const {city, offers} = props;
  const offerNumber = offers.length;

  return (
    <b className="places__found">{offerNumber} {offerNumber === Index.FIRST ? 'place' : 'places'} to stay in {city}</b>
  );
}

CardListTitle.propTypes = {
  city: PropTypes.string,
  offers: cardListProp,
};

const mapStateToProps = ({DATA, INTERACTION}) => ({
  city: INTERACTION.city,
  offers: getFilteredOffers(DATA, INTERACTION),
});

export { CardListTitle };
export default connect(mapStateToProps, null)(CardListTitle);
