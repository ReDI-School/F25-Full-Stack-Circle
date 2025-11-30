import type { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  className?: string;
  onRequestClose?: VoidFunction;
}

export type { ModalProps };
