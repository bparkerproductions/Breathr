import React from 'react';
import Modal from './../elements/Modal';

const IntroModal = (props) => {
  function isMobile() {
    if(window.innerWidth <= 1024) return true;
    else return false;
  }

  function playVideo() {
    props.videoPlayer.playVideo() ;
  }

  if(!isMobile()) {
    return (
      <Modal showClose={true} showButton={true} buttonText="Let's get to it">
        <div className="header-container bottom-line">
          <h2 className="title">Welcome to Breathr!</h2>
        </div>
        <p>Breathr is a simple web app that lets you choose and collect your favorite sounds for meditation. No special subscriptions, no extras. </p>
        <p className="bold">Want to get started?</p>
      </Modal>
    )
  }
  else {
    return (
      <Modal showButton={false}>
        <div className="header-container bottom-line">
          <h2 className="title">Welcome to Breathr!</h2>
        </div>
        <p>This is a simple web app that lets you choose and collect your favorite sounds for meditation. You are on a <strong className="emphasize">mobile device</strong>, so you will need to click the play button below in order to get started with streaming videos. </p>

        {/* <div className="play-container mt-small">
          <strong className="emphasize">Start Video Now</strong>
          <div onClick={playVideo} className="modal-icon mt-small">
            <i className="fas fa-play-circle"></i>
          </div>
        </div> */}
      </Modal>
    )
  }
}

export default IntroModal;