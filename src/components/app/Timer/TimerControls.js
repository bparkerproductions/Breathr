import React, {useState} from 'react'
import Timer from 'react-compound-timer'
import { connect } from 'react-redux'

import TimerPlayback from './TimerPlayback'
import ComponentControls from './../Controls/ComponentControls'
import { incrementSecond } from './../../../actions'

const TimerControls = (props) => {
  const [isTimerStarted, setIsTimerStarted] = useState(false)
  const [paused, setPaused] = useState(false)
  const [interval, setTimeInterval] = useState(null)

  function timerStarted(start) {
    setIsTimerStarted(true)
    start()
  }

  function timerStart(start) {
    if(!isTimerStarted) {
      return (
        <div onClick={() => {timerStarted(start)}}
        className="timer-start btn btn-primary rounded-0 text-white d-flex align-items-center justify-content-center">
          <p>Start Timer?</p>
          <i className="fas fa-clock start-timer fa-lg ms-2"></i>
        </div>
      )
    }
    else return null
  }

  function getTimerContainerClass() {
    return props.show && props.allToggled ? 'timer' : 'timer hidden'
  }

  function startTracking() {
    setTimeInterval(setInterval(() => props.incrementSecond(), 1000))
  }

  return (
    <section className={getTimerContainerClass()}>
      <Timer
        onStart={() => startTracking()}
        onResume={() => startTracking()}
        onPause={() => clearInterval(interval)}
        startImmediately={false}>
        {({start, pause, resume, reset, stop}) => (
          <React.Fragment>
            <div className="timer-container">
              <ComponentControls toggleType="timer"></ComponentControls>
              {timerStart(start)}
              <div className={isTimerStarted ? 'main-timer' : 'main-timer hidden'}>
                <span className="time">
                  <Timer.Minutes />
                </span>
                <span className="time-label">m</span>

                <span className="seperator">:</span>

                <span className="time">
                  <Timer.Seconds
                    formatValue={value => value < 10 ? `0${value}` : value}
                  />
                </span>
                <span className="time-label">s</span>
              </div>
            </div>

            <TimerPlayback
              interval={interval}
              started={isTimerStarted}
              paused={paused}
              togglePauseCallback={() => setPaused(!paused)}
              setPausedCallback={() => setPaused(true)}
              stopCallback={stop}
              pauseCallback={pause}
              resumeCallback={resume}
              resetCallback={reset}>
            </TimerPlayback>
          </React.Fragment>
        )}
      </Timer>
    </section>
  )
}

const mapStateToProps = state => { return state }

export default connect(mapStateToProps, {
  incrementSecond,
})(TimerControls)
