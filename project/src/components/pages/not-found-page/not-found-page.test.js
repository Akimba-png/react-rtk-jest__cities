import React from 'react';
import { Router } from 'react-router';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import NotFoundPage from './not-found-page';

describe('Component: NotFoundPage', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <NotFoundPage />
      </Router>,
    );
    const titleElement = getByText('404 Страница не найдена');
    const linkElement = getByText('Вернуться на главную');

    expect(titleElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
