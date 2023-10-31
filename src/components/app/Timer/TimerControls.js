import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'

import TimerPlayback from './TimerPlayback'
import ComponentControls from './../Controls/ComponentControls'
import { incrementSecond } from './../../../actions'

import { Button, Card, Container, Typography, Divider, CardActions, Stack } from '@mui/joy'
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
    if ( !(props.show && props.allToggled) ) return 'hidden'
  }

  return (
    <Container
      component="section"
      id="timer-container"
      className={isHidden()}
      sx={{ marginTop: 12.5, marginBottom: 12.5 }}
    >
      <Card
        variant="solid"
        color="primary"
        invertedColors="true"
        sx={{
          "--Card-padding": "29px",
          "--Card-radius": "12px",
          mx: "auto",
          maxWidth: "450px"
        }}>
          <Stack direction="row" justifyContent="space-between" alignItems="flex-end">
            <Typography level="title-sm">Start Timing</Typography>
            <ComponentControls toggleType="timer"></ComponentControls>
          </Stack>
          <Divider />
          <Typography level="h2" color="primary">
          <Typography>{getMinutes()}m</Typography> : <Typography>{getSeconds()}s</Typography>
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
