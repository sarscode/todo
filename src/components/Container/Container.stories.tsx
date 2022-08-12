import { ComponentMeta } from '@storybook/react';
import Container from './Container';

export default {
  title: 'Layout/Container',
  component: Container,
} as ComponentMeta<typeof Container>;

export const ContainerDiv = () => (
  <Container>
    <h2>This is a container div</h2>
    <p>This text is within a container div.</p>
  </Container>
);
