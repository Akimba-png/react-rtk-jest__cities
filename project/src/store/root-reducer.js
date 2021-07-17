import { combineReducers } from 'redux';
import { appData } from './app-data/app-data';
import { user } from './user/user';
import { appInteraction } from './app-interaction/app-interaction';

export const NameSpace = {
  DATA: 'DATA',
  INTERACTION: 'INTERACTION',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.DATA]: appData,
  [NameSpace.INTERACTION]: appInteraction,
  [NameSpace.USER]: user,
});
