import React from 'react';
import classNames from 'classnames/bind';

import styles from './Loader.module.scss';

const cx = classNames.bind(styles);

interface LoaderProps {
  variant?: 'base' | 'page';
  size?: 'sm' | 'md' | 'lg';
}

const Loader = ({ variant = 'base', size = 'sm' }: LoaderProps) => {
  return (
    <div className={cx('container', variant)}>
      <span className={cx('loader', variant, size)}></span>
    </div>
  );
};

export default Loader;
