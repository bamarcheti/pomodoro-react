import { ArrowPathIcon, Cog8ToothIcon, PauseIcon, PlayIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface ConfigTimerProps {
  onClick: () => void;
}

const Timer = ({ onClick }: ConfigTimerProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(0);

  const initTimer = (workMinutes: number) => {
    setSecondsLeft(workMinutes * 60);
  };

  // useEffect(() => {
  //   initTimer();

  //   setTimeout(secondsLeft, 2500);
  // }, [isPaused]);

  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <CircularProgressbar
        value={60}
        text={`60%`}
        styles={buildStyles({
          pathColor: `rgb(62, 152, 199)`,
          textColor: '#3e98c7',
          trailColor: '#d6d6d6',
          backgroundColor: '#3e98c7'
        })}
      />
      <div className="flex flex-row mt-5 justify-center gap-2">
        <div className="flex gap-3">
          {isPaused ? (
            <PlayIcon className="h-6 w-6 text-primary inline-block cursor-pointer" title="Play" />
          ) : (
            <div className="flex flex-row">
              <PauseIcon
                className="h-6 w-6 text-primary inline-block cursor-pointer"
                title="Pause"
              />
              <ArrowPathIcon
                className="h-6 w-6 text-primary inline-block cursor-pointer"
                title="Reset"
              />
            </div>
          )}
        </div>
        <div className="flex">
          <Cog8ToothIcon
            className="h-6 w-6 text-primary inline-block cursor-pointer"
            title="Settings"
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Timer;
