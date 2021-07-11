import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import Logo from './../../logo/logo';
import Navigation from './../../navigation/navigation';
import { login } from './../../../store/api-actions';
import { AuthorizationStatus, AppRoute } from './../../../const';

const VALIDITY_MESSAGE = 'Это небезопасный пароль, добавьте символ отличный от пробела';

function LoginPage(props) {
  const { onFormSubmit, currentAuthorizationStatus } = props;
  const { register, handleSubmit, getValues, formState: { errors } } = useForm();

  if (currentAuthorizationStatus === AuthorizationStatus.AUTH) {
    return <Redirect to={AppRoute.MAIN} />;
  }

  const handleLoginFormSubmit = () => {
    const formValue = {
      email: getValues().email,
      password: getValues().password,
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
            <form onSubmit={handleSubmit(handleLoginFormSubmit)} className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input {...register('email')} className="login__input form__input" type="email" name="email" placeholder="Email" required="required" />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                {errors.password && <span>{VALIDITY_MESSAGE}</span>}
                <input {...register('password', { pattern: /\S/ })} className="login__input form__input" type="password" name="password" placeholder="Password" required="required" />
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
  currentAuthorizationStatus: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit(formValue) {
    dispatch(login(formValue));
  },
});

const mapStateToProps = (state) => ({
  currentAuthorizationStatus: state.authorizationStatus,
});

export { LoginPage };
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
