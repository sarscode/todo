import { render, screen } from '@testing-library/react';
import Avatar, { formatDisplayName } from './Avatar';

const displayName = 'User';

test('Avatar should render without crashing', () => {
  const { container } = render(<Avatar displayName={displayName} />);
  const avatar = screen.getByTestId('avatar');
  expect(container.textContent).toBe(formatDisplayName(displayName));
  expect(avatar).toBeInTheDocument();
});

test('format display name', () => {
  expect(formatDisplayName(displayName)).toBe('US');
  expect(formatDisplayName('John Doe')).toBe('JD');
});
