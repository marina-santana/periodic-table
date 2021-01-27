import { useState } from "react";

const useModal = () => {
  let [isShowing, setIsShowing] = useState<boolean>();

  const handleModal = () => {      
    const newIsShowing: boolean =  isShowing ? false : true;

    setIsShowing(newIsShowing);
  };

  return {handleModal, isShowing };
};

export default useModal;
