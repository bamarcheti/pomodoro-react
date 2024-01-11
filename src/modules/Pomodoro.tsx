import { Component } from 'react';
import Settings from '../components/Settings';
import Timer from '../components/Timer';
import formatDate from '../helpers/formatDate';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

interface State {
  pomodoros: Array<{
    type: string;
    name: string;
    id: number;
    workMinutes: number;
    started?: string;
  }>;
  showHistory: boolean;
  hasStarted: boolean;
  currentPomodoro: number;
  breakMinutes: number;
  interval: number | undefined;
  allPomodorosMade: [];
}

class Pomodoro extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      pomodoros: POMODOROS,
      showHistory: false,
      hasStarted: false,
      currentPomodoro: 0,
      breakMinutes: 0,
      interval: undefined,
      allPomodorosMade: []
    };
  }

  handleStartStopTimer = () => {
    if (this.state.hasStarted) {
      if (window.confirm('Está ação irá para e resetar o pomodoro. Você tem certeza?'))
        this.stopTimer();
    } else {
      this.startTimer();
    }
  };

  handleResetTimer = () => {
    if (window.confirm('Isso irá PARA e LIMPAR o pomodoro. Você tem certeza?')) this.resetTimer();
  };

  startTimer = () => {
    const interval = window.setInterval(() => {
      if (
        this.state.breakMinutes === this.state.pomodoros[this.state.currentPomodoro].workMinutes
      ) {
        return this.nextPomo();
      }
      this.setState((state) => {
        return { breakMinutes: state.breakMinutes + 1 };
      });
    }, 1000);

    this.savePomodoro();
    this.setState({ interval, hasStarted: true });
  };

  stopTimer = () => {
    clearInterval(this.state.interval);
    this.setState((state) => {
      return {
        pomodoros: state.pomodoros.map((pomo, i) => {
          if (i === state.currentPomodoro) {
            return {
              ...pomo,
              started: undefined
            };
          }
          return pomo;
        }),
        breakMinutes: 0,
        interval: undefined,
        hasStarted: false
      };
    });
  };

  resetTimer = () => {
    clearInterval(this.state.interval);
    this.setState({
      pomodoros: POMODOROS,
      hasStarted: false,
      breakMinutes: 0,
      interval: undefined,
      currentPomodoro: 0
    });
  };

  nextPomo = () => {
    if (this.state.pomodoros.length - 1 === this.state.currentPomodoro) {
      return this.resetTimer();
    }

    this.setState((state) => {
      return {
        breakMinutes: 0,
        currentPomodoro: state.currentPomodoro + 1
      };
    });
    this.savePomodoro();
  };

  savePomodoro = () => {
    const currentPomodoro = this.state.pomodoros[this.state.currentPomodoro];
    const now = Date.now();
    const allPomodorosMade: [] = [];

    this.setState((state) => {
      return {
        pomodoros: state.pomodoros.map((pomo, i) => {
          if (i === state.currentPomodoro) {
            return {
              ...pomo,
              started: formatDate.printFromDateObject('hh:mm', now)
            };
          }
          return pomo;
        }),
        allPomodorosMade: allPomodorosMade.length > 0 ? allPomodorosMade : state.allPomodorosMade
      };
    });
  };

  render() {
    const currentPomodoro = this.state.pomodoros[this.state.currentPomodoro];

    return (
      <div className="flex flex-col items-center text-primary gap-9">
        <Timer workMinutes={currentPomodoro.workMinutes} breakMinutes={this.state.breakMinutes} />
        <div className="gap-4 flex flex-col items-center">
          <Settings
            hasStarted={this.state.hasStarted}
            handleResetTimer={this.handleResetTimer}
            handleStartStopTimer={this.handleStartStopTimer}
          />
          <h2 className="text-sm md:text-base  xl:text-lg font-bold">
            Clique no play para iniciar o pomodoro.
          </h2>
        </div>
      </div>
    );
  }
}

export default Pomodoro;

const POMODOROS = [
  { type: 'pomodoro', name: 'Pomodoro', id: 1, workMinutes: 1500 },
  { type: 'break', name: 'Short break', id: 2, workMinutes: 300 }
];
