import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { ModalContext } from "../context/modalContext";
import { ModalContainer } from "../styles/modal";

interface ModalContextProps {
  children: any;
}

const Modal: React.FC<ModalContextProps> = ({children}) => {
  const { isShowing } = useContext(ModalContext); 

  return isShowing ? ReactDOM.createPortal(<ModalContainer>{children}</ModalContainer>, document.body) : null;
};

export default Modal;
