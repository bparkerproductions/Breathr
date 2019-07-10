import React, { useState } from 'react';
import Modal from './../elements/Modal';

const IntroModal = (props) => {
  const [toggled, setToggled] = useState(true);

  function isMobile() {
    if(window.innerWidth <= 1024) return true;
    else return false;
  }

  function playVideo() {
    props.videoPlayer.playVideo();
    setToggled(false);
  }

  function startVideoSection() {
    return (
      <div className="play-container mt-small">
        <strong onClick={playVideo} className="emphasize">Start Video Now</strong>
        <div onClick={playVideo} className="modal-icon mt-small">
          <i className="fas fa-play-circle"></i>
        </div>
      </div>
    );
  }

  if(!isMobile()) {
    return (
      <Modal
        showClose={false}
        firstVisitOnly={true}
        showButton={false}
        closedFromOuter={toggled}
        buttonText="Let's get to it">
        <div className="header-container bottom-line">
          <h2 className="title">Welcome to Breathr!</h2>
        </div>
        <p>Breathr is a simple web app that lets you choose and collect your favorite sounds for meditation. No special subscriptions, no extras. </p>
        {startVideoSection()}
      </Modal>
    )
  }
  else {
    return (
      <Modal
        showButton={false}
        closedFromOuter={toggled}
        firstVisitOnly={false}>
        <div className="header-container bottom-line">
          <h2 className="title">Welcome to Breathr!</h2>
        </div>
        <p>This is a simple web app that lets you choose and collect your favorite sounds for meditation. You are on a <strong className="emphasize">mobile device</strong>, so you will need to click the play button below in order to get started with streaming videos. </p>

        {startVideoSection()}
      </Modal>
    )
  }
}

export default IntroModal;