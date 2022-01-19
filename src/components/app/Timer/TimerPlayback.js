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

  function timerControls() {
    if(props.started) {
      return (
        <div className="timer-controls">
          {getPlayOrPause(props.pauseCallback, props.resumeCallback)}
          <div className="reset">
            <i onClick={resetTimer} className="fas fa-undo"></i>
          </div>
        </div>
      )
    }
    else return null
  }

  function resetTimer() {
    // props.stopCallback()
    clearInterval(props.interval)
    props.togglePauseCallback()
    props.pauseCallback()
    props.resetCallback()
  }

  return (
    <div className="playback">
      {timerControls()}
    </div>
  )
}

export default TimerPlayback