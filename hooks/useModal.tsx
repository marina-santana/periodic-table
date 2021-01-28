import { useState } from 'react';

const useModal = () => {
    const [isShowing, setIsShowing] = useState<boolean>();

    const handleModal = () => {
        const newIsShowing: boolean = isShowing ? false : true;

        setIsShowing(newIsShowing);
    };

    return { handleModal, isShowing };
};

export default useModal;
