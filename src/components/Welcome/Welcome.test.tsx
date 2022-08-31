import { render, screen } from '@testing-library/react';
import Welcome from './Welcome';

test('should render Welcome Screen without crashing', () => {
  render(<Welcome />);
  const WelcomeScreen = screen.getByTestId('welcome-screen');
  expect(WelcomeScreen).toBeInTheDocument();
});
