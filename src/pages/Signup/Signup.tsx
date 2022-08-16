import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Checkbox, Container, Input, Logo } from '../../components';

import styles from './Signup.module.scss';

const cx = classNames.bind(styles);

interface ISignupForm {
  firstName: string;
  email: string;
  password: string;
  terms: boolean;
}

function Signup() {
  const {
    formState: { isValid, errors },
    handleSubmit,
    register,
  } = useForm<ISignupForm>({ mode: 'all' });

  const onSubmit: SubmitHandler<ISignupForm> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Container className={cx('main')}>
        <div className={cx('logo')}>
          <Link to="/">
            <Logo size="lg" variant="colored" />
          </Link>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} data-testid="login-form">
          <h2>Get Started</h2>
          <p>Create an account to begin.</p>
          <Input
            type="text"
            placeholder="First Name"
            label="First Name"
            id="name"
            error={errors?.firstName?.message}
            required
            fullWidth
            {...register('firstName', {
              required: { value: true, message: 'First name is required' },
              maxLength: {
                value: 25,
                message: 'First name should not be more than 25 characters.',
              },
            })}
          />
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
              minLength: {
                value: 6,
                message: 'Password cannot be less than 6 characters',
              },
            })}
          />
          <small className={cx('terms')}>
            <Checkbox
              label="By checking this, you agree to our "
              id="terms"
              {...register('terms', { required: true })}
            />{' '}
            <Button to="/" variant="inline" label="terms of use" />
          </small>
          <Button
            type="submit"
            label="Create My Account"
            className={cx('cta')}
            disabled={!isValid}
            fullWidth
          />
          <div>
            <small>
              Already have an account?{' '}
              <Button to="/login" label="Login to continue" variant="inline" />
            </small>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Signup;
