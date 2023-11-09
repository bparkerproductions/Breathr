import { connect } from 'react-redux'

import { Box, Card, Divider, Typography } from '@mui/joy'
import MLink from '@mui/joy/Link'
import { useState, useRef, useEffect } from 'react'
import { Link, router, usePage } from '@inertiajs/react'

const DailyMinutes = ({ ...props }) => {
  const { auth } = usePage().props
  const [isShown, setIsShown] = useState(false)
  const [minutesLogged, setMinutesLogged] = useState(Math.floor(getMinutes()))
  const dailyMinutesTimer = useRef(null)

  useEffect(() => {
    console.log(minutesLogged, getMinutes())
    if (minutesLogged !== getMinutes()) {
      storeMinutes()
      setMinutesLogged(getMinutes())
    }
  }, [props.secondsForDay])

  function getMinutes() {
    return Math.floor(props.secondsForDay / 60);
  }

  /**
   * Make a POST request to store the current daily amount of minutes
   */
  function storeMinutes() {
    router.post('/time/store', { minutes: getMinutes() } , { preserveScroll: true })
  }

  /**
   * Display their total time if they have at least minute, otherwise give them a default message
   */
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

  /**
   * Get the "top" value for the popout so it's positioned under the <time> element
   */
  function getTopHeight() {
    if (dailyMinutesTimer.current) {
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
          position: 'absolute',
          display: () => { if (!isShown) return 'none' },
          top: getTopHeight(),
          width: '350px'
        }}>
      <Card>
        {getMessage()}
        <Divider />
        {auth.user ? (
          <>
          <Typography level="body-sm">Want to save your time and start building a streak?</Typography>
          <Link href={route('register')}>
            <MLink level="body-sm">Sign up for an account today</MLink>
          </Link>
          </>
        ) : ""}
      </Card>
      </Box>

      <Box
        ref={dailyMinutesTimer}
        onClick={() => setIsShown(!isShown)}
        className="cursor-pointer"
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