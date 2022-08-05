import { render, screen } from '@testing-library/react';
import Logo from './Logo';

test('should render logo with crashing', () => {
  const { container } = render(<Logo />);
  expect(container).toBeInTheDocument();
});

test('should render "todo" in lower case', () => {
  render(<Logo />);
  const letterOs = screen.getAllByText('o');
  const letterT = screen.getByText('t');
  const letterD = screen.getByText('d');
  const firstO = letterOs[0];
  const lastO = letterOs[1];

  expect(letterT).toBeInTheDocument();
  expect(firstO).toBeInTheDocument();
  expect(letterD).toBeInTheDocument();
  expect(lastO).toBeInTheDocument();
});
