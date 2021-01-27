import React, { createContext, ReactChild, ReactChildren } from "react";
import useModal from "../hooks/useModal";

interface Props {
    children: ReactChild | ReactChildren;
}
   
export const ModalContext = createContext<any>({});

const ModalProvider = ({ children }: Props) => {

  const { handleModal, isShowing } = useModal();

  return (
    <ModalContext.Provider value={{ handleModal, isShowing }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
