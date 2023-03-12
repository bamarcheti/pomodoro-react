import { useState } from 'react';
import MainLayout from './components/Main';
import Settings from './components/Settings';
import Timer from './modules/Timer';

const App = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);

  return (
    <div className="App ">
      <MainLayout>
        {showSettings ? (
          <Settings
            onClick={() => setShowSettings(false)}
            workMinutes={workMinutes}
            breakMinutes={breakMinutes}
            onWorkMinutesChange={setWorkMinutes}
            onBreakMinutesChange={setBreakMinutes}
          />
        ) : (
          <Timer
            onClick={() => setShowSettings(true)}
            workMinutes={workMinutes}
            breakMinutes={breakMinutes}
          />
        )}
      </MainLayout>
    </div>
  );
};

export default App;
