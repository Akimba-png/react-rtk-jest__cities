import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import Logo from './../../logo/logo';
import Navigation from './../../navigation/navigation';
import ErrorMessage from './../../error-message/error-message';
import { login } from './../../../store/api-actions';
import { AuthorizationStatus, AppRoute } from './../../../const';
import { getAuthorizationStatus } from './../../../store/user/selectors';

const VALIDITY_EMAIL_MESSAGE = 'Введите почтовый адрес в формате: ****@**.**';
const VALIDITY_PASSWORD_MESSAGE = 'Это небезопасный пароль, добавьте символ отличный от пробела';
const renderErrorMessage = (validityMessage) =>
  (<span style={{ color: 'red' }}>{validityMessage}</span>);

function LoginPage() {
  const [errorStatus, setErrorStatus] = useState(false);
  const currentAuthorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();
  const { register, handleSubmit, getValues, formState: { errors } } = useForm();

  if (currentAuthorizationStatus === AuthorizationStatus.AUTH) {
    return <Redirect to={AppRoute.MAIN} />;
  }

  const handleLoginFormSubmit = () => {
    const formValue = {
      email: getValues().email,
      password: getValues().password,
    };
    dispatch(login(formValue, setErrorStatus));
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
                <label className="visually-hidden" htmlFor="email">E-mail</label>
                {errors.email && renderErrorMessage(VALIDITY_EMAIL_MESSAGE)}
                <input {...register('email', { pattern: /\S+@\S+\.[A-Za-z]+$/ })} data-testid="email" className="login__input form__input" type="email" name="email" id="email" placeholder="Email" required="required" />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden" htmlFor="password">Password</label>
                {errors.password && renderErrorMessage(VALIDITY_PASSWORD_MESSAGE)}
                <input {...register('password', { pattern: /\S/ })} data-testid="password" className="login__input form__input" type="password" name="password" id="password" placeholder="Password" required="required" />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
            {errorStatus && <ErrorMessage />}
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

export default LoginPage;
