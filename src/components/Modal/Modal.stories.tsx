import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import Modal from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
  args: {
    closeOnEsc: true,
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ minHeight: '100vh' }}>
      <h1 onClick={() => setShowModal(true)}>Click Me! to open a modal</h1>
      {showModal && (
        <Modal
          {...args}
          onCloseModal={() => setShowModal(false)}
          root="modal-root"
        >
          <h2>This is a Modal</h2>
        </Modal>
      )}
    </div>
  );
};

export const ModalWithEscClose = Template.bind({});
ModalWithEscClose.args = {
  closeOnEsc: true,
};
