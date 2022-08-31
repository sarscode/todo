import { ComponentMeta, ComponentStory } from '@storybook/react';
import TextArea from './TextArea';

export default {
  title: 'Forms/TextArea',
  component: TextArea,
  args: {
    id: 'description',
    label: 'Description',
    placeholder: 'Enter a description for your todo',
    required: false,
    fullWidth: false,
  },
} as ComponentMeta<typeof TextArea>;

export const Textarea: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);
