import React, { createContext, ReactNode, ReactPortal } from 'react';
import useModal from '../hooks/useModal';

interface ModalProviderProps {
    children: ReactPortal | ReactNode;
}

export const ModalContext = createContext({
  handleModal: () => {},
  isShowing: false
});

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
    const { handleModal, isShowing } = useModal();

    return (
        <ModalContext.Provider value={{ handleModal, isShowing }}>
            {children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;
