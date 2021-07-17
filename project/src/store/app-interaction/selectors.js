import { NameSpace } from './../root-reducer';

export const getActiveCity = (state) =>
  state[NameSpace.INTERACTION].city;

export const getActiveSortType = (state) =>
  state[NameSpace.INTERACTION].sortType;

export const getActiveCardId = (state) =>
  state[NameSpace.INTERACTION].activeCardId;
