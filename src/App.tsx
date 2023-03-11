import { useState } from 'react';
import Settings from './components/Settings';
import Timer from './modules/Timer';

const App = () => {
  const [showSettings, setShowSettings] = useState(false);
  return (
    <div className="App ">
      {showSettings ? (
        <Settings onClick={() => setShowSettings(false)} />
      ) : (
        <Timer onClick={() => setShowSettings(true)} />
      )}
    </div>
  );
};

export default App;
