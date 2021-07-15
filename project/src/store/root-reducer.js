import { combineReducers } from 'redux';
import { appData } from './app-data/app-data';
import { user } from './user/user';
import { appInterection } from './app-interection/app-interection';

export const NameSpace = {
  DATA: 'DATA',
  INTERACTION: 'INTERACTION',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.DATA]: appData,
  [NameSpace.INTERACTION]: appInterection,
  [NameSpace.USER]: user,
});
