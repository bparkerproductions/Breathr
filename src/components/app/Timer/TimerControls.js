import React, {useEffect, useRef, useState} from 'react'
import { connect } from 'react-redux'

import ComponentControls from './../Controls/ComponentControls'
import { incrementSecond } from './../../../actions'

import { Button, Card, Container, Typography, Divider, CardActions, Stack } from '@mui/joy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons'

const TimerControls = ({ incrementSecond, show, allToggled }) => {
  const [time, setTime] = useState(0)
  const [start, setStart] = useState(false)
  const [boxHeight, setBoxHeight] = useState(null)
  const timeInterval = useRef(false)
  const cardRef = useRef(null)

  useEffect(() => {

    // Set initial height of timer container
    if (cardRef.current) {
      setBoxHeight(cardRef.current.offsetHeight + "px")
    }

    if (start) {
      timeInterval.current = setInterval(() => {
        setTime(prevTime => prevTime + 1)
        incrementSecond()
      }, 1000)
    } else {
      clearInterval(timeInterval.current)
    }

    return () => clearInterval(timeInterval.current)
  }, [start, incrementSecond])

  function getIcon() {
    if (start) return <FontAwesomeIcon icon={faStop} />
    else return <FontAwesomeIcon icon={faPlay} />
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
    if ( !(show && allToggled) ) return 'hidden'
  }

  return (
    <Container
      component="section"
      id="timer-container"
      className={isHidden()}
      sx={{
        marginY: 12.5,
        height: boxHeight
      }}
    >
  
      <Card
        ref={cardRef}
        variant="solid"
        color="primary"
        invertedColors="true"
        sx={{
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
              onClick={() => setStart(!start)}
              size="sm"
              startDecorator={getIcon()}>
                {start ? 'Stop' : 'Start'}
            </Button>
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
