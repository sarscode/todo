import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { Button } from '../';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    label: 'Button',
    variant: 'base',
  },
  decorators: [withRouter],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
  disabled: false,
};

export const ButtonLink = Template.bind({});
ButtonLink.args = {
  to: '/',
  isExternal: false,
};
