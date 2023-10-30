import React from 'react'
import Modal from './../elements/Modal'
import { connect } from 'react-redux'
import { checkVisitCount } from '../../helpers/store/general'
import { setPaused } from './../../actions/appToggles'
import { incrementVideosPlayed } from './../../actions'
import { toggleCollection } from './../../actions/appToggles'
import Button from '@mui/joy/Button'


const IntroModal = (props) => {
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
    const welcomeMessage = 'Pick up where you left off'
    const firstTimeMessage = 'Breathr lets you choose and collect your favorite soundscapes/moods for meditation and relaxation. No special subscriptions, no extras.'
    return checkVisitCount() > 1 ? welcomeMessage : firstTimeMessage
  }

  if (props.videosPlayed === 0) {
    return (
      <div className="d-flex justify-content-center">
        <Modal
          showClose={false}
          firstVisitOnly={false}
          showButton={false}
          contentClasses="intro-modal"
          closedFromOuter={true}
          buttonText="Let's get to it">
            <div className="header-container">
              <h2 className="title text-dark">{title()}</h2>
              <hr />
            </div>

            <div>
              <p>{description()}</p>
              <div className="play-container d-flex flex-column flex-md-row">
                <Button onClick={playVideo} variant="solid">Start Video Now</Button>
              </div>
            </div>
        </Modal>
      </div>
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
  incrementVideosPlayed,
  toggleCollection
})(IntroModal)