import React from 'react';

class TimerPlayback extends React.Component {
  getPlayOrPause(pause, resume) {
    let pauseTimer = this.props.togglePauseCallback;

    if(!this.props.paused) {
      return (
        <div onClick={pauseTimer} className="pause">
          <i onClick={pause} className="far fa-pause-circle"></i>
        </div>
      );
    }
    else {
      return (
        <div onClick={pauseTimer} className="resume">
          <i onClick={resume} className="far fa-play-circle"></i>
        </div>
      );
    }
  }
  timerControls(pause, resume, reset) {
    if(this.props.started) {
      return (
        <div className="timer-controls">
          {this.getPlayOrPause(pause, resume)}
          <div className="reset">
            <i onClick={reset} className="fas fa-undo"></i>
          </div>
        </div>
      );
    }
    else {
      return null;
    }
  }
  render() {
    let pause = this.props.pauseCallback;
    let resume = this.props.resumeCallback;
    let reset = this.props.resetCallback;

    return (
      <div className="playback">
        {this.timerControls(pause, resume, reset)}
      </div>
    )
  }
}

export default TimerPlayback;