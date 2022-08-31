import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Menu, MenuButton, MenuList, MenuListItem } from './Menu';

export default {
  title: 'Components/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

export const DropIconMenu: ComponentStory<typeof Menu> = () => (
  <Menu>
    <MenuButton>
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
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
        <circle cx="5" cy="12" r="1" />
      </svg>
    </MenuButton>
    <MenuList>
      <MenuListItem>Setting</MenuListItem>
      <MenuListItem>Logout</MenuListItem>
    </MenuList>
  </Menu>
);

export const WithoutDropIconMenu: ComponentStory<typeof Menu> = () => (
  <Menu>
    <MenuButton showIcon={false}>
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
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
        <circle cx="5" cy="12" r="1" />
      </svg>
    </MenuButton>
    <MenuList>
      <MenuListItem>Setting</MenuListItem>
      <MenuListItem>Logout</MenuListItem>
    </MenuList>
  </Menu>
);
