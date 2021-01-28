import React, { ReactChildren, ReactNode, useContext } from 'react';
import ReactDOM from 'react-dom';
import { ModalContext } from '../context/modalContext';
import Container from '../styles/modal';

interface ModalContextProps {
    children: ReactChildren | ReactNode;
}

const Modal: React.FC<ModalContextProps> = ({ children }) => {
    const { isShowing } = useContext(ModalContext);

    return isShowing
        ? ReactDOM.createPortal(
              <Container>{children}</Container>,
              document.body,
          )
        : null;
};

export default Modal;
