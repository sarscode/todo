import { render, screen } from '@testing-library/react';
import { Menu, MenuButton, MenuList, MenuListItem } from './Menu';

test('should render Menu without crashing', () => {
  render(
    <Menu>
      <MenuButton>...</MenuButton>
      <MenuList>
        <MenuListItem>Edit</MenuListItem>
        <MenuListItem>Delete</MenuListItem>
      </MenuList>
    </Menu>
  );
  const menuComponent = screen.getByTestId('menu');
  const menuButton = screen.getByTestId('menu-btn');
  const menuList = screen.getByTestId('menu-list');
  const menuListItem = screen.getAllByTestId('menu-list-item');

  expect(menuComponent).toBeInTheDocument();
  expect(menuButton).toBeInTheDocument();
  expect(menuList).toBeInTheDocument();
  expect(menuListItem.length).toBeTruthy();
});
