import React from 'react';
import { render, screen } from '@testing-library/react';
import ReviewsList from './reviews-list';
import { TEST_REVIEWS } from './../../const';

const REVIEWS_AMOUNT = 1;
describe('Component: ReviewsList', () => {
  it('should render properly', () => {
    render(
      <ReviewsList reviews={TEST_REVIEWS} reviewsAmount={REVIEWS_AMOUNT} />,
    );
    expect(screen.getByText(TEST_REVIEWS[0].comment)).toBeInTheDocument();
  });
});
