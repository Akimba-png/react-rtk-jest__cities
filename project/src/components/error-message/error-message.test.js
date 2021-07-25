import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorMessage from './error-message';

describe('Component: ErrorMessage', () => {
  it('should render properly', () => {
    render(
      <ErrorMessage />,
    );
    expect(screen.getByText('Server is unavailable')).toBeInTheDocument();
  });
});
