import React from 'react';
import classNames from 'classnames/bind';

import styles from './Loader.module.scss';

const cx = classNames.bind(styles);

const Loader = () => {
  return (
    <div className={cx('container')}>
      <span className={cx('loader')}></span>
    </div>
  );
};

export default Loader;
