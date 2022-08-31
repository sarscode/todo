import classNames from 'classnames/bind';

import styles from './Avatar.module.scss';

const cx = classNames.bind(styles);

export function formatDisplayName(displayName: string) {
  if (displayName.search(/\s/) !== -1) {
    const [firstName, lastName] = displayName.toUpperCase().split(/\s/);
    return firstName[0].concat(lastName[0]);
  }
  return displayName.substring(0, 2).toUpperCase();
}

interface AvatarProps {
  displayName: string;
  size?: 'sm' | 'lg' | 'xl';
}

function Avatar({ displayName, size = 'sm' }: AvatarProps) {
  return (
    <span className={cx('avatar', size)} data-testid="avatar">
      {formatDisplayName(displayName)}
    </span>
  );
}

export default Avatar;
