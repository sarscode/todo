import { render, screen } from '@testing-library/react';
import Container from './Container';

test('should container with children without crashing', () => {
  render(
    <Container>
      <h1>Hello</h1>
    </Container>
  );
  const container = screen.getByTestId('container');
  expect(container.childNodes).toBeTruthy();
  expect(container).toBeInTheDocument();
});
