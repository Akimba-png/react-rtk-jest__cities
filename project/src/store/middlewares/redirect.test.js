import { redirect } from './redirect';
import { redirect as redirectToRoute } from './../action';
import { AppRoute } from './../../const';


const mockRedux = () => {
  const next = jest.fn();
  const invoke = (action) => redirect()(next)(action);
  return { next, invoke };
};

const fakeHistory = {
  location: {pathname: ''},
  push(path) {
    this.location.pathname = path;
  },
};

jest.mock('./../../browser-history', () => fakeHistory);
const testAction = redirectToRoute(AppRoute.MAIN);

describe('Middleware: redirect', () => {
  it('Next middleware should receive action', () => {
    const {next, invoke } = mockRedux();
    invoke(testAction);
    expect(next).toHaveBeenCalledWith(testAction);
  });

  it('history has correct pathname', () => {
    const { invoke } = mockRedux();
    invoke(testAction);
    expect(fakeHistory.location.pathname).toBe(AppRoute.MAIN);
  });

  it('should not redirect when incorrect action received', () => {
    const { invoke } = mockRedux();
    const testUrl = 'url';
    const incorrectAction = {
      type: 'incorrect/action',
      payload: testUrl,
    };
    invoke(incorrectAction);
    expect(fakeHistory.location.pathname).not.toBe(testUrl);
  });
});
