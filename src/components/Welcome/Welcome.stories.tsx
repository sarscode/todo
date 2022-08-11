import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Welcome } from '../';

export default {
  title: 'Components/WelcomeScreen',
  component: Welcome,
} as ComponentMeta<typeof Welcome>;

export const WelcomeScreen: ComponentStory<typeof Welcome> = () => <Welcome />;
