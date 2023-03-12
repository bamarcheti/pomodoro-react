import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

interface ConfigSettingsProps {
  onClick: () => void;
  workMinutes: number;
  breakMinutes: number;
  onWorkMinutesChange: (value: number) => void;
  onBreakMinutesChange: (value: number) => void;
}

const Settings = ({
  onClick,
  workMinutes,
  breakMinutes,
  onWorkMinutesChange,
  onBreakMinutesChange
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
  );
};

export default Settings;
