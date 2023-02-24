import React from 'react'
import Modal from './../elements/Modal'
import { connect } from 'react-redux'
import { checkVisitCount } from '../../helpers/store/general'
import { setPaused } from './../../actions/appToggles'
import { incrementVideosPlayed } from './../../actions'

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
    const welcomeMessage = 'Click the button to continue enjoying your personalized sounds..'
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

            <div className="row">
              <div className="col-12 col-lg-6">
                <p>{description()}</p>
                <div className="play-container d-flex">
                  <button onClick={playVideo} className="btn btn-primary py-3 px-4 text-dark">
                    <span className="fw-bold text-white">Start Video Now</span>
                    <i className="fas fa-play ms-2 fa-lg text-dark ms-3"></i>
                  </button>
                </div>
              </div>
              <div className="col-12 col-lg-6 mt-3 border-start">
                Open Collection
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
  }
}

export default connect(mapStateToProps, {
  setPaused,
  incrementVideosPlayed
})(IntroModal)