import React, { useEffect, useState } from 'react'
import Modal from './../elements/Modal'
import { connect } from 'react-redux'
import { checkVisitCount } from '../../helpers/store/general'
import { setPaused } from './../../actions/appToggles'

const IntroModal = (props) => {
  const [toggled, setToggled] = useState(true)

  function playVideo() {
    props.videoPlayer.playVideo()
    props.setPaused()
    setToggled(false)
  }

  function startVideoSection() {
    return (
      <div className="play-container mt-small">
        <strong onClick={playVideo} className="emphasize">Start Video Now</strong>
        <div onClick={playVideo} className="modal-icon mt-small">
          <i className="fas fa-play-circle"></i>
        </div>
      </div>
    )
  }

  function title() {
    return checkVisitCount() > 1 ? 'Welcome Back!' : 'Welcome to Breathr!'
  }

  function description() {
    const welcomeMessage = 'To continue enjoying your sounds, just click the play button below.'
    const firstTimeMessage = 'Breathr is a simple web app that lets you choose and collect your favorite sounds for meditation. No special subscriptions, no extras.'
    return checkVisitCount() > 1 ? welcomeMessage : firstTimeMessage
  }

  return (
    <Modal
      showClose={false}
      firstVisitOnly={false}
      showButton={false}
      closedFromOuter={toggled && props.paused}
      buttonText="Let's get to it">
        <div className="header-container bottom-line">
          <h2 className="title">{title()}</h2>
        </div>
        <p>{description()}</p>
      {startVideoSection()}
    </Modal>
  )
}
const mapStateToProps = state => {
  return {
    paused: state.paused,
  }
}

export default connect(mapStateToProps, {
  setPaused
})(IntroModal)