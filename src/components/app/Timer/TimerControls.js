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
  timerStarted(start) {
    this.toggleTimer();
    start();
  }
  timerStart(start) {
    if(!this.state.timerStarted) {
      return (
        <div onClick={() => {this.timerStarted(start)}}
        className="timer-start">
          <p>Start Timer?</p>
          <i  className="fas fa-clock start-timer"></i>
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

              <div className="main-timer">
                <span className="time">
                  <Timer.Minutes />
                </span>
                <span className="time-label">m</span>

                <span className="seperator">:</span>

                <span className="time">
                  <Timer.Seconds />
                </span>
                <span className="time-label">s</span>
              </div>

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