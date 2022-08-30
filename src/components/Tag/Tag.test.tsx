import { render, screen } from '@testing-library/react';
import Tag from './Tag';

test('should Tag without crashing', () => {
  render(<Tag id="one" label="work" />);
  const tag = screen.getByTestId('tag');
  const tagColor = screen.getByTestId('tag-color');
  const tagLabel = screen.getByTestId('tag-label');
  const tagCheckbox = screen.getByTestId('tag-checkbox');
  const checkbox = screen.getByRole('checkbox');

  expect(tag).toBeInTheDocument();
  expect(tagColor).toBeInTheDocument();
  expect(tagLabel).toBeInTheDocument();
  expect(tagCheckbox).toBeInTheDocument();
  expect(checkbox).toBeInTheDocument();
});

test('should hide tag label if hideLabel is true', () => {
  render(<Tag id="one" label="work" hideLabel />);

  const tagLabel = screen.queryByTestId('tag-label');
  const tagCheckbox = screen.queryByTestId('tag-checkbox');
  const checkbox = screen.queryByRole('checkbox');

  expect(tagLabel).not.toBeInTheDocument();
  expect(tagCheckbox).not.toBeInTheDocument();
  expect(checkbox).not.toBeInTheDocument();
});
