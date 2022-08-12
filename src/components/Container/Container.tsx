import { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './Container.module.scss';

const cx = classNames.bind(styles);

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

function Container({ children, className }: ContainerProps) {
  return (
    <div className={cx('container', className)} data-testid="container">
      {children}
    </div>
  );
}

export default Container;
