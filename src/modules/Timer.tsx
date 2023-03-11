import { Cog8ToothIcon, PauseIcon, PlayIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface ConfigSettingsProps {
  onClick: () => void;
}

const Timer = ({ onClick }: ConfigSettingsProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (isPaused) {
        return;
      }
      if (secondsLeft === 0) {
        return switchMode();
      }
    }, 2500);
  }, [isPaused]);

  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <div>
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
      </div>
      <div className="flex flex-row mt-5 justify-center gap-2">
        <div className="flex gap-3">
          {isPaused ? (
            <PlayIcon
              className="h-6 w-6 text-primary inline-block cursor-pointer"
              title="Play"
              onClick={() => {
                setIsPaused(false);
                isPausedRef.current = false;
              }}
            />
          ) : (
            <div className="flex flex-row">
              <PauseIcon
                className="h-6 w-6 text-primary inline-block cursor-pointer"
                title="Pause"
                onClick={() => {
                  setIsPaused(true);
                  isPausedRef.current = true;
                }}
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
