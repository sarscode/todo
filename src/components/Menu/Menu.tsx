import {
  createContext,
  Dispatch,
  HTMLAttributes,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import className from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = className.bind(styles);

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface MenuListProps extends Props {
  padding?: boolean;
  align?: 'left' | 'right';
}

interface MenuListItemProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
}

interface MenuButtonProps extends Props {
  showIcon?: boolean;
}

type MenuContextValue = {
  showList: boolean;
  setShowList: Dispatch<SetStateAction<boolean>>;
};

const contextValue: MenuContextValue = {
  showList: false,
  setShowList: () => false,
};

const MenuContext = createContext(contextValue);

export function Menu({ children, ...props }: Props) {
  const [showList, setShowList] = useState(false);
  return (
    <div className={cx('menu')} data-testid="menu" {...props}>
      <MenuContext.Provider value={{ showList, setShowList }}>
        {children}
      </MenuContext.Provider>
    </div>
  );
}

export function MenuButton({ children, showIcon = true }: MenuButtonProps) {
  const { showList, setShowList } = useContext(MenuContext);
  return (
    <button
      className={cx('menu-btn')}
      onClick={() => setShowList(!showList)}
      data-testid="menu-btn"
    >
      {children}
      {showIcon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      )}
    </button>
  );
}

export function MenuList({ children, padding, align = 'left' }: MenuListProps) {
  const { showList } = useContext(MenuContext);
  return (
    <>
      <ul
        className={cx('menu-list', align, { padding, show: showList })}
        data-testid="menu-list"
      >
        {children}
      </ul>
    </>
  );
}

export function MenuListItem({ children, ...props }: MenuListItemProps) {
  const { showList, setShowList } = useContext(MenuContext);

  return (
    <>
      <li
        {...props}
        className={cx('menu-list-item')}
        data-testid="menu-list-item"
        onClickCapture={() => setShowList(!showList)}
      >
        {children}
      </li>
    </>
  );
}
