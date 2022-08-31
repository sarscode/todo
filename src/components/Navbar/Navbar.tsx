import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Logo, Menu, MenuButton, MenuList, MenuListItem } from '../';
import styles from './Navbar.module.scss';
import Avatar from '../Avatar/Avatar';
import useAuth from '../../hooks/useAuth';

const cx = classNames.bind(styles);

function Navbar() {
  const { logout, user } = useAuth();

  return (
    <nav className={cx('navbar')} data-testid="navbar">
      <Link to="/dashboard">
        <Logo />
      </Link>
      {user && (
        <Menu>
          <MenuButton showIcon={false}>
            <Avatar displayName={user.displayName || 'User'} />
          </MenuButton>
          <MenuList align="right">
            <MenuListItem>
              <Link to="/account">Account</Link>
            </MenuListItem>
            <MenuListItem>
              <span onClick={() => logout()}>Logout</span>
            </MenuListItem>
          </MenuList>
        </Menu>
      )}
    </nav>
  );
}

export default Navbar;
