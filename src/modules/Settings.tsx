import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Button from '../components/Button';

interface ConfigSettingsProps {
  workMinutes: number;
  breakMinutes: number;
  isOpen: boolean;
  onWorkMinutesChange: (value: number) => void;
  onBreakMinutesChange: (value: number) => void;
  onClose: () => void;
  onConfirm: () => void;
}

const Settings = ({
  workMinutes,
  breakMinutes,
  isOpen,
  onWorkMinutesChange,
  onBreakMinutesChange,
  onClose,
  onConfirm
}: ConfigSettingsProps) => {
  const [valueWorkMinuts, setValueWorkMinuts] = useState(workMinutes);
  const [valueBreakMinuts, setValueBreakMinuts] = useState(breakMinutes);

  const handleWorkMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onWorkMinutesChange(parseInt(e.target.value));
    setValueWorkMinuts(parseInt(e.target.value));
  };

  const handleBreakMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onBreakMinutesChange(parseInt(e.target.value));
    setValueBreakMinuts(parseInt(e.target.value));
  };

  const handleAddNewTimer = () => {
    onConfirm();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Transition appear as={Fragment} show={isOpen}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={onClose}>
        <div className="min-h-screen px-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="flex overflow-y-auto overflow-x-hidden fixed top-4 z-50 justify-center items-center h-full md:h-full inset-0">
              <div className="relative px-4 w-full max-w-lg h-auto m-auto">
                <div className="flex flex-col justify-center text-left mt-2 mx-96 py-9">
                  {/* <div className="w-full">
                    <ArrowLeftIcon
                      className="flex justify-start w-6 h-6 text-primary hover:opacity-60"
                      title="Voltar"
                      onClick={onClick}
                    />
                  </div> */}
                  <div className="flex flex-col justify-center items-center">
                    <label className="block mb-2 mt-5">Pomodoro:</label>
                    <div className="flex flex-row gap-3">
                      <section className="rounded-2xl">
                        <input
                          className="cursor-pointer"
                          type="range"
                          min={1}
                          max={120}
                          value={workMinutes}
                          onChange={handleWorkMinutesChange}
                        />
                      </section>
                      <section>
                        <p>{valueWorkMinuts}:00</p>
                      </section>
                    </div>

                    <label className="block mb-2 mt-5">Intervalo: </label>
                    <div className="flex flex-row gap-3">
                      <section className="rounded-2xl">
                        <input
                          className="cursor-pointer"
                          type="range"
                          min={1}
                          max={120}
                          value={breakMinutes}
                          onChange={handleBreakMinutesChange}
                        />
                      </section>
                      <section>
                        <p>{valueBreakMinuts}:00</p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center p-6 space-x-3 rounded-b border-t border-gray-200 justify-end">
                <Button variant="default" type="button" onClick={handleCancel}>
                  Cancelar
                </Button>
                <Button variant="primary" type="button" onClick={handleAddNewTimer}>
                  Adicionar
                </Button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Settings;
