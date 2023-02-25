import React from 'react'

const TimerPlayback = (props) => {
  function getPlayOrPause() {
    const buttonClasses = "btn btn-primary text-white";
    if (!props.paused) {
      return (
        <div onClick={pauseCallback} className={`pause ${buttonClasses}`}>
          <i className="far fa-pause-circle fa-lg"></i>
        </div>
      )
    }
    else {
      return (
        <div onClick={resumeCallback} className={`resume ${buttonClasses}`}>
          <i className="far fa-play-circle fa-lg"></i>
        </div>
      )
    }
  }

  function resumeCallback() {
    props.togglePauseCallback()
    props.resumeCallback()
  }

  function pauseCallback() {
    props.togglePauseCallback()
    props.pauseCallback()
  }

  function timerControls() {
    if (props.started) {
      return (
        <div className="timer-controls d-flex justify-content-center">
          {getPlayOrPause()}
          <div onClick={resetTimer} className="reset btn btn-primary text-white ms-2">
            <i className="fas fa-undo fa-lg"></i>
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