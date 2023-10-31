import React, { useState } from 'react'
import { connect } from 'react-redux'
import { checkVisitCount } from '../../helpers/store/general'
import { setPaused } from './../../actions/appToggles'
import { incrementVideosPlayed } from './../../actions'
import Button from '@mui/joy/Button'
import { Box, Card, Typography, CardActions, Container, Divider } from '@mui/joy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle} from '@fortawesome/free-solid-svg-icons'


const IntroModal = (props) => {
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

  function title() {
    return checkVisitCount() > 1 ? 'Welcome Back!' : 'Welcome to Breathr!'
  }

  function description() {
    const welcomeMessage = 'Pick up where you left off.'
    const firstTimeMessage = 'Breathr lets you choose and collect your favorite soundscapes/moods for meditation and relaxation. No special subscriptions, no extras.'
    return checkVisitCount() > 1 ? welcomeMessage : firstTimeMessage
  }

  if (props.videosPlayed === 0 && isShown) {
    return (
      <Container
        component="section"
        sx={{ marginTop: 12.5, marginBottom: 12.5 }}
      >
        <Card
          color="primary"
          variant="solid"
          invertedColors
          sx={{ maxWidth: '750px', mx: 'auto' }}
        >
          <Typography level="title-lg">{title()}</Typography>
          <Divider />
          <Box>
            <Typography level="body-md" fontWeight="normal">{description()}</Typography>
          </Box>
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
  else return null
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