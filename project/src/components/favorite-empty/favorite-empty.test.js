import React from 'react';
import { render, screen } from '@testing-library/react';
import FavoriteEmpty from './favorite-empty';

describe('Component: FavoriteEmpty', () => {
  it('should render properly when there are no favorite offers', () => {
    render(
      <FavoriteEmpty />,
    );
    expect(screen.getByText('Nothing yet saved.')).toBeInTheDocument();
    expect(screen.getByText('Save properties to narrow down search or plan your future trips.')).toBeInTheDocument();
  });
});
