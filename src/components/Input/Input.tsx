import { forwardRef, InputHTMLAttributes, LegacyRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'email' | 'password';
  label: string;
  id: string;
  fullWidth?: boolean;
  error?: string;
}

const Input = forwardRef(
  (
    { type = 'text', label, id, fullWidth, error, ...props }: InputProps,
    ref: LegacyRef<HTMLInputElement> | undefined
  ) => {
    return (
      <>
        <label
          htmlFor={id}
          className={cx('input-label', { required: props.required })}
        >
          {label}
        </label>
        <input
          type={type}
          id={id}
          className={cx('input', { fw: fullWidth, error: error })}
          ref={ref}
          {...props}
        />
        {error && <small className={cx('input-error')}>{error}</small>}
      </>
    );
  }
);

export default Input;
