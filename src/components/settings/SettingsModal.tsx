import Format from '@app/enums/format.enum';

import Modal from '../common/Modal';
import PreferedQualitySelect from './PreferedQualitySelect';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal = (props: Props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Settings">
      {Object.values(Format).map((x) => (
        <div key={x} className="flex flex-col gap-2 mt-6">
          <h2 className="uppercase text-lg text-stone-100">{x}</h2>
          <PreferedQualitySelect format={x} />
        </div>
      ))}
    </Modal>
  );
};

export default SettingsModal;
