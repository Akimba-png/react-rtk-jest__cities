import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSorting } from './../../store/action';
import { SortValue } from './../../const';
import { getActiveSortType } from './../../store/app-interaction/selectors';

function Sorting() {
  const sortType = useSelector(getActiveSortType);
  const dispatch = useDispatch();
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
      dispatch(changeSorting(item));
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

export default Sorting;
