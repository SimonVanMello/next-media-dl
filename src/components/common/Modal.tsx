import { PropsWithChildren } from 'react';
import {
  DialogBackdrop,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';

import CloseButton from '../settings/CloseButton';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

const Modal = (props: PropsWithChildren<Props>) => {
  const {
    isOpen,
    onClose,
    title,
    children,
  } = props;

  return (
    <Dialog open={isOpen} onClose={onClose} as="div" className="relative z-50 focus:outline-none">
      <DialogBackdrop className="fixed inset-0 bg-stone-950/80" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md rounded-xl bg-stone-500/5 p-6 backdrop-blur-2xl ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 shadow-xl border border-neutral-900"
          >
            <div className="flex flex-between mb-4">
              <DialogTitle as="h2" className="text-base/7 font-medium text-white">
                {title}
              </DialogTitle>
              <CloseButton onClick={onClose} />
            </div>
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
