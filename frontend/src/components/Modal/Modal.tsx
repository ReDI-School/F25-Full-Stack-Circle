import ReactModal from 'react-modal';

import type { ModalProps } from './Modal.types';

import styles from './Modal.module.css';

const Modal = ({ isOpen, children, className = '', onRequestClose }: ModalProps) => (
  <ReactModal
    isOpen={isOpen}
    className={`${className} ${styles.content}`}
    overlayClassName={`${className} ${styles.overlay}`}
    onRequestClose={onRequestClose}
    role="dialog"
    ariaHideApp={false}
    shouldReturnFocusAfterClose
    shouldFocusAfterRender
    shouldCloseOnEsc
  >
    {children}
  </ReactModal>
);

export default Modal;
