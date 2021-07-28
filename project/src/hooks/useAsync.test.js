import { renderHook } from '@testing-library/react-hooks';
import { useAsync } from './useAsync';
import * as Redux from 'react-redux';

const TEST_URL = '/offer/3';
const EXPECTED_VALUES = [
  'propertyData',
  'errorStatus',
  'setPropertyData',
  'offerId',
];

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    location: {
      pathname: TEST_URL,
    },
  }),
}));

describe('Hook: useAsync', () => {
  it('should return correct value', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    const { result } = renderHook(() => useAsync());
    expect(Object.keys(result.current)).toEqual(EXPECTED_VALUES);
  });
});
