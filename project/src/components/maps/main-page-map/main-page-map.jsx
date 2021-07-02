import React from 'react';
import { connect } from 'react-redux';
import Map from './../map/map';
import cardListProp from './../../cards/card-list/card-list.prop';
import { getFilteredOffers } from './../../../store/selectors';

function MainPageMap(props) {
  const { offers } = props;

  return (
    <Map offers={offers} />
  );
}

MainPageMap.propTypes = {
  offers: cardListProp,
};

const mapStateToProps = (state) => ({
  offers: getFilteredOffers(state),
});

export { MainPageMap };
export default connect(mapStateToProps, null)(MainPageMap);
