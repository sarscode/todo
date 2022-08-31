import { ReactEventHandler, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

interface Props {
  children: ReactNode;
  root: string;
  onCloseModal: Function;
  closeOnEsc?: boolean;
}

function Modal({ children, closeOnEsc, onCloseModal, root }: Props) {
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && closeOnEsc) {
        onCloseModal();
      }
    };

    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [onCloseModal, closeOnEsc]);

  const clickAwayListener: ReactEventHandler = (e) => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  return createPortal(
    <div
      className={cx('modal')}
      data-testid="modal"
      onClick={clickAwayListener}
    >
      <div className={cx('content')} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById(root) as HTMLElement
  );
}

export default Modal;
