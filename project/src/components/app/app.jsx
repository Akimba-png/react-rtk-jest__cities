import React from 'react';
import PropTypes from 'prop-types';
import MainPage from './../main-page/main-page';

function App(props) {
  const {placeCardsCount} = props;
  return (
    <MainPage placeCardsCount={placeCardsCount} />
  );
}

App.propTypes = {
  placeCardsCount: PropTypes.number.isRequired,
};

export default App;
