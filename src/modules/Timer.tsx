import { Cog8ToothIcon, PauseIcon, PlayIcon } from '@heroicons/react/24/outline';
import { useEffect, useRef, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface ConfigSettingsProps {
  onClick: () => void;
  workMinutes: number;
  breakMinutes: number;
}
const Timer = ({ onClick, workMinutes, breakMinutes }: ConfigSettingsProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const [mode, setMode] = useState<'work' | 'break'>('work');
  const [secondsLeft, setSecondsLeft] = useState(0);
  const secondsLeftRef = useRef(0);
  const isPausedRef = useRef(false);

  if ('Notification' in window) {
    Notification.requestPermission();
  }

  const switchMode = () => {
    const nextMode = mode === 'work' ? 'break' : 'work';
    const nextSeconds = nextMode === 'work' ? workMinutes * 60 : breakMinutes * 60;
    setMode(nextMode);
    setSecondsLeft(nextSeconds);
  };

  const initTimer = () => {
    setSecondsLeft(workMinutes * 60);
    secondsLeftRef.current = workMinutes * 60;
  };

  let notificationTrigger = false;
  const tick = () => {
    if (secondsLeftRef.current > 0) {
      secondsLeftRef.current--;
      setSecondsLeft(secondsLeftRef.current);
      notificationTrigger = false;
    }

    if (secondsLeftRef.current === 0 && !notificationTrigger) {
      new Audio('../assets/hint.mp3').play();
      new Notification('Timer finished!', { body: `The ${mode} time is over!` });
      notificationTrigger = true;
      switchMode();
    }
  };

  const totalSeconds = mode === 'work' ? workMinutes * 60 : breakMinutes * 60;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const secondsString = seconds < 10 ? `0${seconds}` : `${seconds}`;

  const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const timeString = `${minutesString}:${secondsString}`;

  useEffect(() => {
    if (!isPaused) {
      const timerId = setTimeout(() => {
        if (secondsLeft === 0) {
          return switchMode();
        }
        tick();
      }, 1000);
      return () => clearTimeout(timerId);
    }
  }, [isPaused, secondsLeft]);

  useEffect(() => {
    initTimer();
  }, []);

  const handlePauseClick = () => {
    setIsPaused(true);
    isPausedRef.current = true;
  };

  const handlePlayClick = () => {
    setIsPaused(false);
    isPausedRef.current = false;
  };

  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <div>
        <CircularProgressbar
          value={percentage}
          text={timeString}
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
              onClick={handlePlayClick}
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
