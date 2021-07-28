import React from 'react';
import { render, screen } from '@testing-library/react';
import ReviewsItem from './reviews-item';
import { TEST_REVIEWS } from './../../const';

describe('Component: ReviewsItem', () => {
  it('should render properly', () => {
    render(
      <ReviewsItem review={TEST_REVIEWS[0]} />,
    );
    expect(screen.getByText(TEST_REVIEWS[0].comment)).toBeInTheDocument();
  });
});
