import React from 'react';
import Timer from 'react-compound-timer';

class TimerControls extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timerStarted: false
    }

    this.toggleTimer = this.toggleTimer.bind(this);
  }
  toggleTimer() {
    this.setState({timerStarted: true})
  }
  timerControls(pause, resume) {
    if(this.state.timerStarted) {
      return (
        <div className="timer-controls">
          <i onClick={pause} className="far fa-pause-circle"></i>
          <i onClick={resume} className="far fa-play-circle"></i>
        </div>
      );
    }
    else {
      return null;
    }
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
          {({start, pause, resume}) => (
            <React.Fragment>
              <Timer.Minutes />m
              <span className="seperator">:</span>
              <Timer.Seconds />s

              {this.timerStart(start)}
              {this.timerControls(pause, resume)}
            </React.Fragment>
          )}
        </Timer>
      </section>
    );
  }
}

export default TimerControls;