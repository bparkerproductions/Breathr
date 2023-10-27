import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'

import TimerPlayback from './TimerPlayback'
import ComponentControls from './../Controls/ComponentControls'
import { incrementSecond } from './../../../actions'
import Button from '@mui/joy/Button';

const TimerControls = (props) => {
  const [isTimerStarted, setIsTimerStarted] = useState(false)
  const [time, setTime] = useState(0)
  const [start, setStart] = useState(false)
  const [timeInterval, setTimeInterval] = useState(false)

  useEffect(() => {

    if(start) {
      setTimeInterval(setInterval(() => {
        setTime(prevTime => prevTime + 1)
        props.incrementSecond()
      }, 1000))
    } else {
      clearInterval(timeInterval)
    }

    return () => clearInterval(timeInterval)
  }, [start])

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

  function getSeconds() {
    return ("0" + Math.floor((time % 60))).slice(-2)
  }

  function getMinutes() {
    return ("0" + Math.floor(((time / 60) % 60))).slice(-2)
  }

  function resetStopwatch() {
    setTime(0)
    setStart(false)
  }

  return (
    <section className={` container `}>
      <div className="clock-container">
        <h1>Stopwatch</h1>
        <h1>{getMinutes()}m</h1>
        <h1>{getSeconds()}s</h1>
        <Button onClick={() => setStart(true)}>Start</Button>
        <Button onClick={() => setStart(false)}>Stop</Button>
        <Button onClick={ resetStopwatch }>Reset</Button>
      </div>
    </section>
  )
}

const mapStateToProps = state => { return state }

export default connect(mapStateToProps, {
  incrementSecond,
})(TimerControls)
