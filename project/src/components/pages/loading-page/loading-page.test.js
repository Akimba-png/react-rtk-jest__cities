import React from 'react';
import { render } from '@testing-library/react';
import LoadingPage from './loading-page';

describe('Component: LoadingPage', () => {
  it('should render correctly', () => {
    const { getByText } = render(
      <LoadingPage />,
    );
    const titleElement = getByText('Loading...');
    expect(titleElement).toBeInTheDocument();
  });
});
