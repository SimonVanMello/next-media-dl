import useDisclosure from '@app/hooks/useDisclosure.hook';

import SettingsModal from '../settings/SettingsModal';

const Footer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <footer className="animate w-full">
      <div className="flex justify-between items-center">
        <span>
          &copy; 2024 | Simon Van Mello
        </span>
        <button type="button" onClick={onOpen} className="btn btn-outlined btn-sm">
          Settings
        </button>
      </div>
      <SettingsModal
        isOpen={isOpen}
        onClose={onClose}
      />
    </footer>
  );
};

export default Footer;
