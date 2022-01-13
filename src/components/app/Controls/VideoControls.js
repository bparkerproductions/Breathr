import React, { useState } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import { connect } from 'react-redux'

const VideoControls = props => {
  const [muted, setMuted] = useState(false)
  const [paused, setPaused] = useState(false)
  const [volume, changeVolume] = useState(100)

  const muteClass = (muted || volume === 0) ? 'fas fa-volume-off' : 'fas fa-volume-up'
  const getPauseOrPlay = paused ? 'fas fa-play' : 'far fa-pause-circle'

  function toggleMuted() {
    setMuted(!muted)
    muted ? props.videoPlayer.setVolume(100) : props.videoPlayer.setVolume(0)
  }
  
  function handleVolumeChange(value) {
    changeVolume(value)
    props.videoPlayer.setVolume(volume)
    return volume
  }

  function togglePause() {
    setPaused(!paused)
    !paused ? props.videoPlayer.pauseVideo() : props.videoPlayer.playVideo()
  }

  return (
    <aside id="video-controls" className="navbar-col">
      <div className="ui-button" onClick={togglePause}>
        <i title="Pause or play video" className={getPauseOrPlay}></i>
      </div>
      <div onClick={toggleMuted} className="ui-button">
        <i title="video volume" className={muteClass}></i>
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
  return { videoPlayer: state.videoPlayer }
}

export default connect(mapStateToProps)(VideoControls)