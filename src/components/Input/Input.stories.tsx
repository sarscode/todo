import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from './Input';

export default {
  title: 'Forms/Input',
  component: Input,
  args: {
    id: 'name',
    label: 'Username',
    placeholder: 'Enter your username',
    type: 'text',
    required: false,
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const EmailInput = Template.bind({});
EmailInput.args = {
  type: 'email',
  label: 'Email Address',
  id: 'email',
  placeholder: 'Enter your email address',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
};

export const Required = Template.bind({});
Required.args = {
  required: true,
};
