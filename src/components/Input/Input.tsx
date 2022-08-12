import { InputHTMLAttributes } from 'react';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'email' | 'password';
  label: string;
  id: string;
  fullWidth?: boolean;
}

function Input({ type = 'text', label, id, fullWidth, ...props }: InputProps) {
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
        className={cx('input', { fw: fullWidth })}
        {...props}
      />
    </>
  );
}

export default Input;
