import React, { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux'

import { Box, Button, Card, Divider, Link, Typography } from '@mui/joy'

const DailyMinutes = (props) => {
  const [isShown, setIsShown] = useState(false)
  const dailyMinutesTimer = useRef(null)

  function getMinutes() {
    return Math.floor(props.secondsForDay/60);
  }

  function getMessage() {
    if (props.secondsForDay < 60) {
      return (
        <Typography level="body-sm">You haven't logged any time yet. Go ahead and start the timer to start tracking.</Typography>
      )
    }
    return (
      <Typography level="body-sm">
        You've logged <Typography className="emphasize" color="primary" fontWeight="bold">{getMinutes()}</Typography> 
         { getMinutes() > 1 ? " minutes" : " minute" } today. Keep going!
      </Typography>
    )
  }

  function getTopHeight() {
    if (dailyMinutesTimer.current) {
      console.log(dailyMinutesTimer.offsetHeight + 'px')
      return dailyMinutesTimer.current.offsetHeight + 'px'
    }
  }

  return (
    <Box
      component="time"
      id="daily-minutes"
      sx={{ position: "relative" }}
    >
      <Box sx={{
          position: "absolute",
          display: () => { if (!isShown) return 'none' },
          top: getTopHeight()
        }}>
      <Card>
        {getMessage()}
        <Divider />
        <Typography level="body-sm">Want to save your time and start building a streak?</Typography>
        <Link level="body-sm">Sign up for an account today</Link>
      </Card>
      </Box>

      <Box
        ref={dailyMinutesTimer}
        onClick={() => setIsShown(!isShown)}
        sx={{cursor: 'pointer'}}
      >
        <Typography level="h1" sx={{ color: 'white' }}>{getMinutes()}</Typography>
        <Typography sx={{ color: 'white' }}>m</Typography>
      </Box>
    </Box>
  )
}

const mapStateToProps = state => {
  return {
    secondsForDay: state.secondsForDay
  }
}

export default connect(mapStateToProps)(DailyMinutes)