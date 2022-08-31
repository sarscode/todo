import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

test('should render a navbar without crashing', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  const navbar = screen.getByTestId('navbar');

  expect(navbar).toBeInTheDocument();
});
