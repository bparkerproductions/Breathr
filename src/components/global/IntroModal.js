import React, { useState } from 'react'
import Modal from './../elements/Modal'
import { connect } from 'react-redux'
import { checkVisitCount } from '../../helpers/store/general'
import { setPaused } from './../../actions/appToggles'
import { incrementVideosPlayed } from './../../actions'

const IntroModal = (props) => {
  const [toggled, setToggled] = useState(true)

  function playVideo() {
    // The only time a video count can be incremented is when initially clicking the 
    // play button on app load (it will start playing the default selected video)
    if (props.videosPlayed === 0) {
      props.incrementVideosPlayed()
    } 

    props.videoPlayer.playVideo()
    props.setPaused(false)
    setToggled(false)
  }

  function startVideoSection() {
    return (
      <div className="play-container">
        <div onClick={playVideo} className="play-item">
          <strong className="play-item__title">Start Video Now</strong>
          <div className="play-item__icon">
            <i className="fas fa-play-circle"></i>
          </div>
        </div>
      </div>
    )
  }

  function title() {
    return checkVisitCount() > 1 ? 'Welcome Back!' : 'Welcome to Breathr!'
  }

  function description() {
    const welcomeMessage = 'Click the button to continue enjoying your personalized sounds..'
    const firstTimeMessage = 'Breathr lets you choose and collect your favorite soundscapes/moods for meditation and relaxation. No special subscriptions, no extras.'
    return checkVisitCount() > 1 ? welcomeMessage : firstTimeMessage
  }

  if (props.videosPlayed === 0) {
    return (
      <Modal
        showClose={false}
        firstVisitOnly={false}
        showButton={false}
        contentClasses="intro-modal"
        closedFromOuter={true}
        buttonText="Let's get to it">
          <div className="header-container bottom-line">
            <h2 className="title">{title()}</h2>
          </div>
          <p>{description()}</p>
          {startVideoSection()}
      </Modal>
    )
  }
  else return null
}
const mapStateToProps = state => {
  return {
    videosPlayed: state.videosPlayed,
  }
}

export default connect(mapStateToProps, {
  setPaused,
  incrementVideosPlayed
})(IntroModal)