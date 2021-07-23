import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import Logo from './logo';
import { AppRoute, LOGO_ACTIVE_MODE } from './../../const';

const history = createMemoryHistory();
describe('Component: Logo', () => {
  it('should render properly when user is on main page', () => {
    history.push(AppRoute.MAIN);
    render(
      <Router history={history}>
        <Logo logoActiveMode={LOGO_ACTIVE_MODE}/>
      </Router>,
    );
    expect(screen.getByTestId('logo-link')).toHaveClass('header__logo-link--active');
  });

  it('should render properly when user is on other pages', () => {
    history.push(AppRoute.MAIN);
    render(
      <Router history={history}>
        <Logo />
      </Router>,
    );
    expect(screen.getByTestId('logo-link')).not.toHaveClass('header__logo-link--active');
  });
});
