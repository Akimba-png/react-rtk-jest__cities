import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreator } from './../../store/action';
import { SortValue } from './../../const';

function Sorting(props) {
  const { sortType, changeSorting } = props;
  const [sortWindowMode, setSortWindowMode] = useState('');

  const toggleSortWindowMode = () => {
    if (sortWindowMode === '') {
      setSortWindowMode('places__options--opened');
    } else {
      setSortWindowMode('');
    }
  };

  const handleSortItemClick = (item) =>
    () => {
      changeSorting(item);
      toggleSortWindowMode();
    };

  const isItemActive = (item) =>
    item === sortType ? 'places__option--active' : '';

  const createSortElement = () =>
    Object.values(SortValue).map((item, index) => {
      const keyValue = `${item}-${index}`;
      return (
        <li onClick={handleSortItemClick(item)}
          className={`places__option ${isItemActive(item)}`}
          tabIndex="0"
          key={keyValue}
        >
          {item}
        </li>
      );
    });

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={toggleSortWindowMode} className="places__sorting-type" tabIndex="0">
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${sortWindowMode}`}>
        {createSortElement()}
      </ul>
    </form>
  );
}

Sorting.propTypes = {
  sortType: PropTypes.string.isRequired,
  changeSorting: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  sortType: state.sortType,
});

const mapDispatchToProps = (dispatch) => ({
  changeSorting(sortValue) {
    dispatch(ActionCreator.changeSorting(sortValue));
  },
});

export { Sorting };
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);