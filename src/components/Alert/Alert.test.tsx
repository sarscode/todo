import { render, screen } from '@testing-library/react';
import Alert from './Alert';

test('should render alert without crashing', () => {
  render(<Alert message="An error occured" status="error" />);
  const alert = screen.getByTestId('alert');
  const alertBtn = screen.getByTestId('alert-close-btn');
  const alertMessage = screen.getByTestId('alert-message');

  expect(alert).toBeInTheDocument();
  expect(alertBtn).toBeInTheDocument();
  expect(alertMessage).toBeInTheDocument();
});
