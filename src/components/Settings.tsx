import { Pause, Play, RefreshCcw } from 'lucide-react';

interface Props {
  hasStarted: boolean;
  handleStartStopTimer: () => void;
  handleResetTimer: () => void;
}

const Settings = ({ hasStarted, handleStartStopTimer, handleResetTimer }: Props) => {
  const iconStyle =
    'w-6 xl:w-8 h-6 xl:h-8 text-primary inline-block cursor-pointer transition ease-in-out hover:-translate-1 hover:scale-110 hover:opacity-70';

  return (
    <div className="flex flex-row items-center gap-5">
      <button className={iconStyle} onClick={handleStartStopTimer}>
        {hasStarted ? (
          <Pause className="w-6 xl:w-8 h-6 xl:h-8" />
        ) : (
          <Play className="w-6 xl:w-8 h-6 xl:h-8" />
        )}
      </button>
      <RefreshCcw className={iconStyle} onClick={handleResetTimer} />
    </div>
  );
};

export default Settings;
