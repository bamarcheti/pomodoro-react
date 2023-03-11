import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

interface ConfigSettingsProps {
  onClick: () => void;
}

const Settings = ({ onClick }: ConfigSettingsProps) => {
  const [workMinutes, setWorkMinutes] = useState(1);
  const [breakMinutes, setBreakMinutes] = useState(1);

  return (
    <div className="flex flex-col justify-center text-left mt-2 mx-96 py-9">
      <ArrowUturnLeftIcon
        className="flex justify-start ml-60 w-6 h-6 hover:text-gray-700"
        title="Voltar"
        onClick={onClick}
      />
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
              onChange={(event) => {
                setWorkMinutes(event.target.valueAsNumber);
              }}
            />
          </section>
          <section>
            <p>{workMinutes}: 00</p>
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
              onChange={(event) => {
                setBreakMinutes(event.target.valueAsNumber);
              }}
            />
          </section>
          <section>
            <p>{breakMinutes}: 00</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Settings;
