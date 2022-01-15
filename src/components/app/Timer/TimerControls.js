import React, {useState} from 'react'
import Timer from 'react-compound-timer'
import { connect } from 'react-redux'

import TimerPlayback from './TimerPlayback'
import ComponentControls from './../Controls/ComponentControls'
import { incrementSecond } from './../../../actions'

const TimerControls = (props) => {
  const [isTimerStarted, setIsTimerStarted] = useState(false)
  const [paused, setPaused] = useState(false)
  const [interval, setInterval] = useState(null)

  function toggleTimer() {
    setIsTimerStarted(true)
  }

  function togglePause() {
    setPaused(!paused)
  }

  function timerStarted(start) {
    toggleTimer()
    start()
  }

  function timerStart(start) {
    if(!isTimerStarted) {
      return (
        <div onClick={() => {timerStarted(start)}}
        className="timer-start">
          <p>Start Timer?</p>
          <i className="fas fa-clock start-timer"></i>
        </div>
      )
    }
    else return null
  }

  function getTimeFormat(value) {
    return `${(value < 10 ? `0${value}` : value)}`
  }

  function getTimerContainerClass() {
    let show = props.show && props.allToggled
    return show ? 'timer' : 'timer hidden'
  }

  function getTimerClass() {
    return isTimerStarted ? 'main-timer' : 'main-timer hidden'
  }

  function startTracking() {
    let trackInterval = setInterval(() => {
      props.incrementSecond()
    }, 1000)

    setInterval(trackInterval)
  }
  function stopTracking() {
    clearInterval(interval)
  }
  return (
    <section className={getTimerContainerClass()}>
      <Timer
        onStart={() => startTracking()}
        onResume={() => startTracking()}
        onPause={() => stopTracking()}
        startImmediately={false}>
        {({start, pause, resume, reset}) => (
          <React.Fragment>
            <div className="timer-container">
              <ComponentControls toggleType="timer"></ComponentControls>
              {timerStart(start)}
              <div className={getTimerClass()}>
                <span className="time">
                  <Timer.Minutes />
                </span>
                <span className="time-label">m</span>

                <span className="seperator">:</span>

                <span className="time">
                  <Timer.Seconds
                    formatValue={(value) => getTimeFormat(value)}
                  />
                </span>
                <span className="time-label">s</span>
              </div>
            </div>

            <TimerPlayback
              started={isTimerStarted}
              paused={paused}
              togglePauseCallback={togglePause}
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
