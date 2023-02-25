import React from 'react'

const TimerPlayback = (props) => {
  function getPlayOrPause(pause, resume) {
    const buttonClasses = "btn btn-primary text-white";
    if (!props.paused) {
      return (
        <div onClick={props.togglePauseCallback} className={`pause ${buttonClasses}`}>
          <i onClick={pause} className="far fa-pause-circle fa-lg"></i>
        </div>
      )
    }
    else {
      return (
        <div onClick={props.togglePauseCallback} className={`resume ${buttonClasses}`}>
          <i onClick={resume} className="far fa-play-circle fa-lg"></i>
        </div>
      )
    }
  }

  function timerControls() {
    if (props.started) {
      return (
        <div className="timer-controls d-flex justify-content-center">
          {getPlayOrPause(props.pauseCallback, props.resumeCallback)}
          <div className="reset btn btn-primary text-white ms-2">
            <i onClick={resetTimer} className="fas fa-undo fa-lg"></i>
          </div>
        </div>
      )
    }
    else return null
  }

  function resetTimer() {
    clearInterval(props.interval)
    props.setPausedCallback()
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