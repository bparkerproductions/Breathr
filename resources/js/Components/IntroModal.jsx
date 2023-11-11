import React, { useState } from 'react'
import { connect } from 'react-redux'
import { checkVisitCount } from '@/helpers/store'
import { setPaused } from '@/actions/appToggles'
import { incrementVideosPlayed } from '@/actions'
import { Link, usePage } from '@inertiajs/react'

import { Box, Card, Typography, CardActions, Container, Divider, Button, Alert } from '@mui/joy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle} from '@fortawesome/free-solid-svg-icons'

const IntroModal = (props) => {
  const { auth } = usePage().props
  const [isShown, setIsShown] = useState(true)

  function playVideo() {
    // The only time a video count can be incremented is when initially clicking the 
    // play button on app load (it will start playing the default selected video)
    if (props.videosPlayed === 0) {
      props.incrementVideosPlayed()
    } 

    props.videoPlayer.playVideo()
    props.setPaused(false)
  }

  function description() {
    const welcomeMessage = 'Pick up where you left off.'
    const firstTimeMessage = 'Breathr lets you choose and collect your favorite soundscapes/moods for meditation and relaxation. No special subscriptions, no extras.'
    return checkVisitCount() > 1 ? welcomeMessage : firstTimeMessage
  }

  function isHidden() {
    if ( !(props.videosPlayed === 0 && isShown) ) return 'hidden'
  }

    return (
      <Container
        id="intro-modal"
        component="section"
        className={isHidden()}
        sx={{ marginY: { xs: 5, lg: 12.5 } }}
      >
        <Card
          color="primary"
          variant="solid"
          invertedColors
          sx={{ maxWidth: '750px', mx: 'auto' }}
        >
          <Typography level="title-lg">
            {checkVisitCount() > 1 ? 'Welcome Back!' : 'Welcome to Breathr!'}
          </Typography>
          <Divider />
          <Box>
            <Typography level="body-md" fontWeight="normal">{description()}</Typography>
          </Box>

          {!auth.user && <Alert>
            <Typography level="body-sm">Don't have an account?
              <Link href={route('register')} className="text-white pl-2 underline">
                Sign up so you can save your times and soundscapes.
              </Link>
            </Typography>
          </Alert>
          }
          <CardActions>
            <Button onClick={playVideo}>Start Video Now</Button>
            <Button
              color="warning"
              variant="outline"
              startDecorator={<FontAwesomeIcon icon={faTimesCircle} />}
              onClick={() => setIsShown(false)}
            >Dismiss</Button>
          </CardActions>
        </Card>
      </Container>
    )
}

const mapStateToProps = state => {
  return {
    videosPlayed: state.videosPlayed,
    isCollection: state.isCollectionToggled
  }
}

export default connect(mapStateToProps, {
  setPaused,
  incrementVideosPlayed
})(IntroModal)