import { ComponentMeta, ComponentStory } from '@storybook/react';
import Alert from './Alert';

export default {
  title: 'Forms/Alert',
  component: Alert,
  args: {
    autoClose: false,
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const AlertError = Template.bind({});
AlertError.args = {
  status: 'error',
  message: 'This is an error message',
};
