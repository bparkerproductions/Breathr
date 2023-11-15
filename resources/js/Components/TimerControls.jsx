import React, {useEffect, useRef, useState} from 'react'
import { connect } from 'react-redux'

import ComponentControls from '@/Components/ComponentControls'
import { incrementSecond } from '@/actions'

import { Button, Card, Container, Typography, Divider, CardActions, Stack } from '@mui/joy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons'

const TimerControls = ({ incrementSecond, show }) => {
  const [time, setTime] = useState(0)
  const [start, setStart] = useState(false)
  const [boxHeight, setBoxHeight] = useState(null)
  const cardRef = useRef(null)

  useEffect(() => {
    let animationFrameId
    let lastUpdate = Date.now()
    const timeTick = 100

    // Set initial height of timer container
    if (cardRef.current) {
      setBoxHeight(cardRef.current.offsetHeight + "px")
    }

    const updateTimer = () => {
      const now = Date.now()
      const elapsedTime = now - lastUpdate
  
      // Update only when more than 1000ms (1 second) have passed
      if (elapsedTime >= timeTick) {
        setTime(prevTime => prevTime + Math.floor(elapsedTime / timeTick))
        lastUpdate = now
        incrementSecond()
      }

      animationFrameId = requestAnimationFrame(updateTimer)
    }
  
    if (start) animationFrameId = requestAnimationFrame(updateTimer)
    else cancelAnimationFrame(animationFrameId)
  
    return () => cancelAnimationFrame(animationFrameId)
  }, [start, incrementSecond])

  function getIcon() {
    if (start) return <FontAwesomeIcon icon={faStop} />
    else return <FontAwesomeIcon icon={faPlay} />
  }

  /**
   * Basic timer functions. Track for seconds, minutes and hours.
   * Don't show hours unless minutes are actually > 60
   * Show minutes and seconds always
   */
  function getSeconds() {
    const seconds = time % 60
    return ( "0" + Math.floor(seconds) ).slice(-2)
  }

  function getMinutes() {
    const minutes = (time / 60) % 60
    return ( "0" + Math.floor(minutes) ).slice(-2)
  }

  function getHours() {
    const minutes = Math.floor( time / 60 )
    if ( minutes > 60 ) {
      const hours = minutes / 60
      return Math.floor(hours) + 'h : '
    }
  }

  function resetStopwatch() {
    setTime(0)
    setStart(false)
  }

  return (
    <Container
      component="section"
      id="timer-container"
      className={!show && 'hidden'}
      sx={{
        marginBottom: { xs: !show ? 0 : 5, lg: !show ? 0 : 10 },
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
            <ComponentControls toggleType="timer" color="text-white"></ComponentControls>
          </Stack>
          <Divider />
          <Typography level="h2" color="primary">
          <Typography>{getHours()} {getMinutes()}m</Typography> : <Typography>{getSeconds()}s</Typography>
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
