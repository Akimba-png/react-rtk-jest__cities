import { user } from './user';
import { ActionType } from './../action';
import { AuthorizationStatus } from './../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};

describe('Reducer: user', () => {
  it('should return initial state if wrong arguments are passed', () => {
    expect(user(undefined, {})).toEqual(initialState);
  });

  it('should update authorization status by given value', () => {
    const requireAuthorizationAction = {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.AUTH,
    };
    expect(user(initialState, requireAuthorizationAction)).toEqual(expectedState);
  });

  it('should update authorization status to not authorised', () => {
    const logoutAction = {
      type: ActionType.LOGOUT,
    };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NOT_AUTH,
    };
    expect(user(initialState, logoutAction)).toEqual(expectedState);
  });
});
