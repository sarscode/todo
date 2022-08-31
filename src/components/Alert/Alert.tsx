import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Alert.module.scss';

const cx = classNames.bind(styles);

interface AlertProps {
  title?: string;
  message: string;
  status: 'error' | 'info' | 'success' | 'warning';
  autoClose?: boolean;
  autoCloseAfter?: number;
}

function Alert({
  message,
  status,
  autoClose = false,
  autoCloseAfter = 5000,
}: AlertProps) {
  const [close, setClose] = useState<boolean>(false);

  useEffect(() => {
    let closeTimer: ReturnType<typeof setTimeout>;

    if (autoClose) {
      closeTimer = setTimeout(() => {
        setClose(true);
      }, autoCloseAfter);
    }

    return () => {
      clearTimeout(closeTimer);
    };
  }, [close, autoCloseAfter, autoClose]);

  const handleClose = () => {
    setClose(true);
  };

  return (
    <>
      {!close && (
        <div className={cx('alert', status)} data-testid="alert">
          <span className={cx('alert__content')} data-testid="alert-message">
            {message}
          </span>
          <button
            className={cx('close-btn')}
            onClick={handleClose}
            data-testid="alert-close-btn"
          >
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
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

export default Alert;
