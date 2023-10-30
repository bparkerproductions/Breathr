import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'

import TimerPlayback from './TimerPlayback'
import ComponentControls from './../Controls/ComponentControls'
import { incrementSecond } from './../../../actions'

import Button from '@mui/joy/Button'
import Grid from '@mui/joy/Grid'
import Card from '@mui/joy/Card'
import Container from '@mui/joy/Container'
import Typography from '@mui/joy/Typography'
import Divider from '@mui/joy/Divider'
import CardActions from '@mui/joy/CardActions'
import CardContent from '@mui/joy/CardContent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons'

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

  function isHidden() {
    console.log(props.show, props.allToggled)
    if ( !(props.show && props.allToggled) ) return 'hidden'
  }

  return (
    <Container component="section" id="timer-container" className={isHidden()}>
      <ComponentControls toggleType="timer"></ComponentControls>
      <Card
        variant="solid"
        color="primary"
        invertedColors="true"
        sx={{
          "--Card-padding": "29px",
          "--Card-radius": "12px",
          mx: "auto",
          maxWidth: "50%"
        }}>
          <Typography level="title-sm">Start Timing</Typography>
          <Divider />
          <Typography level="h2" color="primary">
            <span>{getMinutes()}m</span> : <span>{getSeconds()}s</span>
          </Typography>

          <CardActions>
            <Button
              onClick={() => setStart(true)}
              size="sm"
              startDecorator={<FontAwesomeIcon icon={faPlay} />}>
                Start
            </Button>
            <Button
              onClick={() => setStart(false)}
              size="sm"
              startDecorator={<FontAwesomeIcon icon={faStop} />}
            >Stop</Button>
            <Button
              onClick={ resetStopwatch }
              size="sm"
            >Reset</Button>
          </CardActions>
      </Card>
    </Container>
  )
}

const mapStateToProps = state => { return state }

export default connect(mapStateToProps, {
  incrementSecond,
})(TimerControls)
