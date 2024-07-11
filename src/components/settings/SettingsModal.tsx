import Modal from '../common/Modal';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal = (props: Props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Settings">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam voluptate optio rerum
        uptates sunt. Nihil, iste quos perferendis aliquid expedita provident perspiciatis?
      </p>
    </Modal>
  );
};

export default SettingsModal;
