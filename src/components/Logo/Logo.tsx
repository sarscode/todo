import classNames from 'classnames/bind';
import styles from './Logo.module.scss';

const cx = classNames.bind(styles);

interface BaseProps {
  variant?: 'striked' | 'base';
  size?: 'sm' | 'lg';
}

interface ColoredProps {
  variant?: 'colored';
  size?: 'sm' | 'lg';
}

type LogoProps = BaseProps | ColoredProps;

function Logo({ variant = 'base', size = 'sm' }: LogoProps) {
  return (
    <span className={cx('logo', variant, size)}>
      <span className={cx('logo__char')}>t</span>
      <span className={cx('logo__char')}>o</span>
      <span className={cx('logo__char')}>d</span>
      <span className={cx('logo__char')}>o</span>
    </span>
  );
}

export default Logo;
