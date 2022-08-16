import classNames from 'classnames/bind';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Button, Input, Container, Logo } from '../../components';

import styles from './Login.module.scss';

const cx = classNames.bind(styles);

interface ILoginForm {
  email: string;
  password: string;
}

function Login() {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<ILoginForm>({ mode: 'all' });

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    console.log(data);
  };

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
        <Button
          type="submit"
          label="Continue"
          className={cx('cta')}
          disabled={!isValid}
          fullWidth
        />
      </form>
    </Container>
  );
}

export default Login;
