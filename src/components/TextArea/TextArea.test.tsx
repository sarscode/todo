import { render, screen } from '@testing-library/react';
import TextArea, { TextAreaProps } from './TextArea';

const props: TextAreaProps = {
  id: 'name',
  label: 'Username',
  placeholder: 'Enter your username',
};

test('should render an Textarea element crashing', () => {
  render(<TextArea {...props} />);
  const textarea = screen.getByRole('textbox');
  expect(textarea.tagName).toBe('TEXTAREA');
  expect(textarea).toBeInTheDocument();
});
