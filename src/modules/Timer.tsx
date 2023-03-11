import { ArrowPathIcon, Cog8ToothIcon, PauseIcon, PlayIcon } from '@heroicons/react/24/outline';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Footer from '../components/Footer';

interface ConfigTimerProps {
  onClick: () => void;
}

const Timer = ({ onClick }: ConfigTimerProps) => {
  return (
    <div className="flex flex-col justify-center pt-10">
      <div className="flex flex-col items-center">
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
          <div className="flex flex-row mt-5 justify-end gap-20">
            <div className="flex gap-3">
              <PlayIcon className="h-6 w-6 text-primary inline-block cursor-pointer" title="Play" />
              <PauseIcon
                className="h-6 w-6 text-primary inline-block cursor-pointer"
                title="Pause"
              />
              <ArrowPathIcon
                className="h-6 w-6 text-primary inline-block cursor-pointer"
                title="Reset"
              />
            </div>
            <div className="flex justify-end">
              <Cog8ToothIcon
                className="h-6 w-6 text-primary inline-block cursor-pointer"
                title="Settings"
                onClick={onClick}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Timer;
