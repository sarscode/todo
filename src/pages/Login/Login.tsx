import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Alert, Button, Input, Container, Logo } from '../../components';
import useAuth from '../../hooks/useAuth';
import { IUserLogin } from '../../@types/user';

import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<IUserLogin>({ mode: 'all' });
  const { login, error, loading, user } = useAuth();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IUserLogin> = async ({ email, password }) => {
    login({ email, password });
  };

  useEffect(() => {
    if (user) {
      navigate('/todos', { replace: true });
    }
  }, [navigate, user]);

  return (
    <Container className={cx('main')}>
      <div className={cx('logo')}>
        <Link to="/">
          <Logo size="lg" variant="colored" />
        </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} data-testid="login-form">
        <h2>Login to Continue</h2>
        <p>
          Looking to create an account instead?{' '}
          <Button to="/signup" label="Sign Up" variant="inline" />
        </p>
        <Input
          type="email"
          placeholder="Email Address"
          label="Email"
          id="email"
          error={errors?.email?.message}
          required
          fullWidth
          {...register('email', {
            required: { value: true, message: 'Email address is required' },
          })}
        />
        <Input
          type="password"
          placeholder="Password"
          label="Password"
          id="password"
          error={errors?.password?.message}
          required
          fullWidth
          {...register('password', {
            required: { value: true, message: 'Password is required' },
          })}
        />
        <div>
          <small>
            Forgot your password?{' '}
            <Button label="Reset it" to="/" variant="inline" />
          </small>
        </div>
        {error && <Alert status="error" message={error} autoClose />}
        <Button
          type="submit"
          label="Continue"
          className={cx('cta')}
          disabled={!isValid || loading}
          loading={loading}
          fullWidth
        />
      </form>
    </Container>
  );
}

export default Login;
