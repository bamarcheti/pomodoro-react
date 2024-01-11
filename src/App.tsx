import MainLayout from './components/MainLayout';
import Pomodoro from './modules/Pomodoro';

const App = () => {
  return (
    <div className="App ">
      <MainLayout>
        <Pomodoro />
      </MainLayout>
    </div>
  );
};

export default App;
