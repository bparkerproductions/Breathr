import React from 'react';
import Timer from 'react-compound-timer';
import { connect } from 'react-redux';

import TimerPlayback from './TimerPlayback';
import ComponentControls from './../Controls/ComponentControls';
import { incrementSecond } from './../../../actions';

class TimerControls extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timerStarted: false,
      paused: false,
      interval: null
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
          <i className="fas fa-clock start-timer"></i>
        </div>
      );
    }
    else return null;
  }
  getTimeFormat(value) {
    return `${(value < 10 ? `0${value}` : value)}`;
  }
  getTimerContainerClass() {
    let show = this.props.show && this.props.allToggled;
    return show ? 'timer' : 'timer hidden';
  }
  getTimerClass() {
    return this.state.timerStarted ? 'main-timer' : 'main-timer hidden';
  }
  startTracking() {
    let trackInterval = setInterval(() => {
      this.props.incrementSecond();
    }, 1000);

    this.setState({interval: trackInterval})
  }
  stopTracking() {
    clearInterval(this.state.interval);
  }
  render() {
    return (
      <section className={this.getTimerContainerClass()}>
        <Timer
          onStart={() => this.startTracking()}
          onResume={() => this.startTracking()}
          onPause={() => this.stopTracking()}
          startImmediately={false}>
          {({start, pause, resume, reset}) => (
            <React.Fragment>
              <div className="timer-container">
                <ComponentControls toggleType="timer"></ComponentControls>
                {this.timerStart(start)}
                <div className={this.getTimerClass()}>
                  <span className="time">
                    <Timer.Minutes />
                  </span>
                  <span className="time-label">m</span>

                  <span className="seperator">:</span>

                  <span className="time">
                    <Timer.Seconds
                      formatValue={(value) => this.getTimeFormat(value)}
                    />
                  </span>
                  <span className="time-label">s</span>
                </div>
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

const mapStateToProps = state => { return state }

export default connect(mapStateToProps, {
  incrementSecond,
})(TimerControls);
