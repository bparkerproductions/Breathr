import React from 'react'

const TimerPlayback = (props) => {
  function getPlayOrPause(pause, resume) {
    if(!props.paused) {
      return (
        <div onClick={props.togglePauseCallback} className="pause">
          <i onClick={pause} className="far fa-pause-circle"></i>
        </div>
      )
    }
    else {
      return (
        <div onClick={props.togglePauseCallback} className="resume">
          <i onClick={resume} className="far fa-play-circle"></i>
        </div>
      )
    }
  }

  function timerControls(pause, resume, reset) {
    if(props.started) {
      return (
        <div className="timer-controls">
          {getPlayOrPause(pause, resume)}
          <div className="reset">
            <i onClick={reset} className="fas fa-undo"></i>
          </div>
        </div>
      )
    }
    else return null
  }

  return (
    <div className="playback">
      {timerControls(props.pauseCallback, props.resumeCallback, props.resetCallback)}
    </div>
  )
}

export default TimerPlayback