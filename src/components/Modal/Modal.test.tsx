import { render, screen } from '@testing-library/react';
import Modal from './Modal';

const modalRoot = 'modal-root';

beforeAll(() => {
  const root = document.createElement('div');
  root.id = modalRoot;
  document.body.appendChild(root);
});

test('should render without crashing', () => {
  const handleClose = jest.fn();
  render(
    <Modal root={modalRoot} onCloseModal={handleClose}>
      <h1>Hello</h1>
    </Modal>
  );
  const modal = screen.getByTestId('modal');
  expect(modal).toBeInTheDocument();
});
