import React from 'react';
interface ModalProps {
    open: boolean;
    modalTitle?: string;
    children?: React.ReactNode;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
