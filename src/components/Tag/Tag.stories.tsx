import { ComponentMeta, ComponentStory } from '@storybook/react';
import Tag from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
  args: {
    label: 'work',
    color: 'one',
    hideLabel: false,
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const DefaultTag = Template.bind({});

export const HiddenLabel = Template.bind({});
HiddenLabel.args = {
  hideLabel: true,
};
