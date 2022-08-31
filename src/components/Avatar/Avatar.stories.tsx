import { ComponentMeta, ComponentStory } from '@storybook/react';
import Avatar from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  args: {
    displayName: 'User',
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Small = Template.bind({});
Small.args = {
  displayName: 'John Doe',
  size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  size: 'xl',
};
