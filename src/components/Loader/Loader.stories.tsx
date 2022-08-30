import { ComponentStory, ComponentMeta } from '@storybook/react';
import Loader from './Loader';

export default {
  title: 'Components/Loader',
  component: Loader,
  args: {
    size: 'sm',
    variant: 'base',
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Base = Template.bind({});

export const PageLoader = Template.bind({});
PageLoader.args = {
  variant: 'page',
};
