import { useCallback, useState } from 'react';

const useDisclosure = (isOpenDefault = false) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  const onOpen = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return {
    isOpen,
    onOpen,
    onClose,
    toggle,
  };
};

export default useDisclosure;
