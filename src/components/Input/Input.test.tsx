import { render, screen } from '@testing-library/react';
import Input, { InputProps } from './Input';

const props: InputProps = {
  id: 'name',
  label: 'Username',
  placeholder: 'Enter your username',
  type: 'text',
};

test('should render an input element crashing', () => {
  render(<Input {...props} />);
  const input = screen.getByRole('textbox');
  expect(input.tagName).toBe('INPUT');
  expect(input).toBeInTheDocument();
});
