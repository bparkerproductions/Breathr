import React, { useState } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import { connect } from 'react-redux'
import { setPaused } from './../../../actions/appToggles'

const VideoControls = props => {
  const [muted, setMuted] = useState(false)
  const [volume, changeVolume] = useState(100)

  const muteClass = (muted || volume === 0) ? 'fas fa-volume-off' : 'fas fa-volume-up'
  const getPauseOrPlay = props.paused ? 'fas fa-play' : 'far fa-pause-circle'

  function toggleMuted() {
    setMuted(!muted)
    muted ? props.videoPlayer.setVolume(volume) : props.videoPlayer.setVolume(0)
  }
  
  function handleVolumeChange(value) {
    changeVolume(value)
    props.videoPlayer.setVolume(volume)
    return volume
  }

  function togglePause() {
    props.setPaused(!props.paused)
    !props.paused ? props.videoPlayer.pauseVideo() : props.videoPlayer.playVideo()
  }

  return (
    <aside id="video-controls" className="navbar-col">
      <div className="ui-button" onClick={togglePause}>
        <i title="Pause or play video" className={`fa-lg ${getPauseOrPlay}`}></i>
      </div>
      <div onClick={toggleMuted} className="ui-button">
        <i title="video volume" className={`fa-lg mute-icon ${muteClass}`}></i>
      </div>

      <div className={`hard-center slider-container ${muted ? 'disabled' : ''}`}>
        <Slider
          value={volume}
          onChange={handleVolumeChange}
          tooltip={false}>
        </Slider>
      </div>
    </aside>
  )
}

const mapStateToProps = state => {
  return {
    paused: state.paused,
    videoPlayer: state.videoPlayer
  }
}

export default connect(mapStateToProps, {
  setPaused
})(VideoControls)