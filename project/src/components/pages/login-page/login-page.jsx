import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Logo from './../../logo/logo';
import Navigation from './../../navigation/navigation';
import { login } from './../../../store/api-actions';

function LoginPage(props) {
  const { onFormSubmit } = props;

  const loginInputRef = useRef(null);
  const passwordInputRef = useRef(null);


  const handleLoginFormSubmit = (evt) => {
    evt.preventDefault();
    const formValue = {
      email: loginInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    onFormSubmit(formValue);
  };


  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <Navigation />
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form onSubmit={handleLoginFormSubmit} className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input ref={loginInputRef} className="login__input form__input" type="email" name="email" placeholder="Email" required="required" />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input ref={passwordInputRef} className="login__input form__input" type="password" name="password" placeholder="Password" required="required" />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

LoginPage.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit(formValue) {
    dispatch(login(formValue));
  },
});

export { LoginPage };
export default connect(null, mapDispatchToProps)(LoginPage);
