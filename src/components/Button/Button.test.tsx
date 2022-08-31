import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Button, { ButtonProps, ButtonLinkProps } from './Button';

test('should render a button with crashing', () => {
  const props: ButtonProps = {
    label: 'Button',
  };

  render(<Button {...props} />);
  const button = screen.getByRole('button', { name: props.label });
  expect(button).toBeInTheDocument();
});

test('should render disabled button if "disbabled" prop is true', () => {
  const props: ButtonProps = {
    label: 'Button',
  };

  render(<Button disabled {...props} />);
  const button = screen.getByRole('button', { name: props.label });
  expect(button).toBeDisabled();
});

test('should render an anchor element when "to" prop is present', () => {
  const props: ButtonLinkProps = {
    label: 'Button Link',
    to: '/',
  };

  render(
    <BrowserRouter>
      <Button {...props} />
    </BrowserRouter>
  );

  const buttonLink = screen.getByRole('link', { name: props.label });

  expect(buttonLink).toBeInTheDocument();
  expect(buttonLink.getAttribute('href')).toBe(props.to);
  expect(buttonLink.tagName).toBe('A');
});

test('should render external link icon if "isExternal" prop is true', () => {
  const props: ButtonLinkProps = {
    label: 'Button Link',
    to: 'https://google.com',
    isExternal: true,
  };

  render(<Button {...props} />);

  const buttonLink = screen.getByTestId('external-link-icon');

  expect(buttonLink).toBeInTheDocument();
});
