import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import ReviewForm from './review-form';
import { Index } from './../../const';

const PLACEHOLDER_TEXT = 'Tell how was your stay, what you like and what can be improved';
const mockStore = configureStore({});

describe('Component: ReviewForm', () => {
  it('should render properly', () => {
    const store = mockStore({});

    render(
      <Provider store={store}>
        <ReviewForm onSendReview={jest.fn()} reviewsAmount={Index.FIRST} offerId={`${Index.FIRST}`}/>
      </Provider>,
    );
    expect(screen.getByPlaceholderText(PLACEHOLDER_TEXT)).toBeInTheDocument();
  });
});
