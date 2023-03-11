import { useState } from 'react';
import MainLayout from './components/Main';
import Settings from './components/Settings';
import Timer from './modules/Timer';

const App = () => {
  const [showSettings, setShowSettings] = useState(false);
  return (
    <div className="App ">
      <MainLayout>
        {showSettings ? (
          <Settings onClick={() => setShowSettings(false)} />
        ) : (
          <Timer onClick={() => setShowSettings(true)} />
        )}
      </MainLayout>
    </div>
  );
};

export default App;
