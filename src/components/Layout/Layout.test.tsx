import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';

test('should render layout component without crashing', () => {
  render(
    <BrowserRouter>
      <Layout main={<div>Hello</div>} />
    </BrowserRouter>
  );
  const container = screen.getByTestId('container');
  const navbar = screen.getByTestId('navbar');
  const layoutContent = screen.getByTestId('layout-content');

  expect(container).toBeInTheDocument();
  expect(navbar).toBeInTheDocument();
  expect(layoutContent).toBeInTheDocument();
});
