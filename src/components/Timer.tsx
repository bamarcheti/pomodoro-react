import { useEffect, useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import date from '../helpers/formatDate';

interface Props {
  workMinutes: number;
  breakMinutes: number;
}

function Timer({ workMinutes, breakMinutes }: Props) {
  const [timer, setTimer] = useState('Pomodoro');

  useEffect(() => {
    setTimer(date.printFromSeconds(workMinutes - breakMinutes));
  }, [workMinutes, breakMinutes]);

  useEffect(() => {
    document.title = `${timer} | Pomodoro`;
  }, [timer]);

  return <span className="font-mono text-7xl sm:text-9xl md:text-12xl">{timer}</span>;
}

export default Timer;
