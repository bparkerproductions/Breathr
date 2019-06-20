import React from 'react';
import Timer from 'react-compound-timer';
import TimerPlayback from './TimerPlayback';

class TimerControls extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timerStarted: false,
      paused: false
    }

    this.toggleTimer = this.toggleTimer.bind(this);
    this.togglePause = this.togglePause.bind(this);
  }
  toggleTimer() {
    this.setState({timerStarted: true})
  }
  togglePause() {
    this.setState({paused: !this.state.paused})
  }

  timerStart(start) {
    if(!this.state.timerStarted) {
      return (
        <div onClick={this.toggleTimer} className="timer-start">
          <p>Start Timer?</p>
          <i onClick={start} className="fas fa-clock"></i>
        </div>
      );
    }
    else {
      return null;
    }
  }
  render() {
    return (
      <section className="timer">
        <Timer startImmediately={false}>
          {({start, pause, resume, reset}) => (
            <React.Fragment>
              {this.timerStart(start)}

              <Timer.Minutes />
              <span className="time-label">m</span>

              <span className="seperator">:</span>

              <Timer.Seconds />
              <span className="time-label">s</span>

              <TimerPlayback
              started={this.state.timerStarted}
              paused={this.state.paused}
              togglePauseCallback={this.togglePause}
              pauseCallback={pause}
              resumeCallback={resume}
              resetCallback={reset}>
              </TimerPlayback>
            </React.Fragment>
          )}
        </Timer>
      </section>
    );
  }
}

export default TimerControls;