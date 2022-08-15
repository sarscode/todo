import { render, screen } from '@testing-library/react';
import Checkbox, { CheckboxProps } from './Checkbox';

const props: CheckboxProps = {
  label: 'Click to agree',
};

test('should render a checkbox input without crashing', () => {
  render(<Checkbox {...props} />);
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).toBeInTheDocument();
});
