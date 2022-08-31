import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';
import { Container, Navbar } from '../';
import styles from './Layout.module.scss';

const cx = classNames.bind(styles);

interface LayoutProps {
  main: ReactNode;
}

function Layout({ main }: LayoutProps) {
  return (
    <Container className={cx('layout')}>
      <Navbar />
      <div className={cx('content')} data-testid="layout-content">
        {main}
      </div>
    </Container>
  );
}

export default Layout;
