import { NameSpace } from './../root-reducer';

export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getDataLoadedStatus = (state) => state[NameSpace.DATA].isDataLoaded;
