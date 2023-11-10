import { connect } from 'react-redux'

import { Box, Card, Divider, Typography } from '@mui/joy'
import { useState, useRef, useEffect } from 'react'
import { Link, router, usePage } from '@inertiajs/react'

const DailyMinutes = ({ ...props }) => {
  const { auth } = usePage().props
  const [isShown, setIsShown] = useState(false)
  const [minutesLogged, setMinutesLogged] = useState(Math.floor(getMinutes()))
  const dailyMinutesTimer = useRef(null)

  /**
   * If the minute is incremented (from the redux store outside of the component),
   * Update minutesLogged to the new value and store the new value in the db
   */
  useEffect(() => {
    if (minutesLogged !== getMinutes()) {
      storeMinutes()
      setMinutesLogged(getMinutes())
    }

    // Set up click outside event listeners
    document.addEventListener('click', handleClickOutside)
  
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  
  }, [props.secondsForDay])

  function handleClickOutside() {
    setIsShown(false)
  }

  function getMinutes() {
    return Math.floor(props.secondsForDay / 60);
  }

  function handleClick(e) {
    e.stopPropagation()
    setIsShown(!isShown)
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
      {isShown && <Box sx={{
          position: 'absolute',
          top: getTopHeight(),
          width: '350px'
        }}>
      <Card>
        {getMessage()}
        <Divider />
        {!auth.user ? (
          <>
          <Typography level="body-sm">Want to save your time and start building a streak?</Typography>
          <Link className="text-blue-500 underline text-sm" href={route('register')}>
            Sign up for an account today
          </Link>
          </>
        ) : (
          <Link className="text-blue-500 underline text-sm" href={route('dashboard')}>
            Go to your dashboard to view a detailed report
          </Link>
        )}
      </Card>
      </Box>}

      <Box
        ref={dailyMinutesTimer}
        onClick={handleClick}
        className="cursor-pointer"
      >
        <Typography level="h1" sx={{ color: 'white' }}>{getMinutes()}</Typography>
        <Typography className="text-white">m</Typography>
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