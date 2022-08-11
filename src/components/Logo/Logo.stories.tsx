import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Logo } from '../';

export default {
  title: 'Brand/Logo',
  component: Logo,
  args: {
    size: 'sm',
    variant: 'base',
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Base = Template.bind({});
Base.args = {
  variant: 'base',
  size: 'sm',
};

export const Colored = Template.bind({});
Colored.args = {
  variant: 'colored',
  size: 'lg',
};
