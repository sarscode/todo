import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { Loader } from '../';

const cx = classNames.bind(styles);

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'inline' | 'base' | 'outline';
  fullWidth?: boolean;
  loading?: boolean;
}

export interface ButtonLinkProps extends LinkProps {
  to: string;
  isExternal?: boolean;
  label: string;
  variant?: 'inline' | 'base' | 'outline';
  fullWidth?: boolean;
}

type Props = ButtonProps | ButtonLinkProps;

function Button({
  label,
  className,
  fullWidth,
  variant = 'base',
  ...props
}: Props) {
  if ('to' in props) {
    const { isExternal, to, ...linkProps } = props;
    if (isExternal) {
      return (
        <a
          href={to}
          className={cx(
            'btn',
            'btn-link',
            { fw: fullWidth },
            variant,
            className
          )}
          target="_blank"
          rel="noreferrer"
          {...linkProps}
        >
          {label}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cx('svg')}
            data-testid="external-link-icon"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      );
    } else {
      return (
        <Link
          className={cx('btn', { fw: fullWidth }, variant, className)}
          {...props}
        >
          {label}
        </Link>
      );
    }
  } else {
    if ('loading' in props) {
      const { loading, ...buttonProps } = props;
      return (
        <button
          className={cx('btn', { fw: fullWidth }, variant, className)}
          {...buttonProps}
        >
          {loading ? <Loader /> : label}
        </button>
      );
    }
    return (
      <button
        className={cx('btn', { fw: fullWidth }, variant, className)}
        {...props}
      >
        {label}
      </button>
    );
  }
}

export default Button;
