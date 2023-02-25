import React, { useState } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import { connect } from 'react-redux'
import { setVideoVolume } from './../../../actions/videoList'
import { incrementVideosPlayed } from './../../../actions'
import { setPaused } from './../../../actions/appToggles'
import CycleVideos from './CycleVideos'

const VideoControls = props => {
  const [muted, setMuted] = useState(false)
  const [localSliderVolume, setLocalSliderVolume] = useState(props.videoVolume)

  const muteClass = (muted || props.videoVolume === 0) ? 'fas fa-volume-off' : 'fas fa-volume-up'
  const getPauseOrPlay = props.paused ? 'fas fa-play' : 'far fa-pause-circle'

  function toggleMuted() {
    setMuted(!muted)
    setLocalSliderVolume(props.videoVolume)

    // Apps volume state needs to be 0 but I use local state here 
    // to reset the volume when it's unmuted
    muted ? handleVolumeChange(localSliderVolume) : muteVolume()
  }

  /**
   * Set UI state to muted and also update the redux store's volume to be 0
   */
  function muteVolume() {
    props.setVideoVolume(0)
    props.videoPlayer.setVolume(0)
  }

  /**
   * Set UI state to the new volume and also update the redux store's volume to be the new value
   */
  function handleVolumeChange(value) {
    props.setVideoVolume(value)
    props.videoPlayer.setVolume(value)
  }

  function togglePause() {
    // The only time a video count can be incremented is when initially clicking the 
    // play button on app load (it will start playing the default selected video)
    if (props.videosPlayed === 0) {
      props.incrementVideosPlayed()
    }

    props.setPaused(!props.paused)
    !props.paused ? props.videoPlayer.pauseVideo() : props.videoPlayer.playVideo()
  }

  return (
    <aside id="video-controls" className="navbar-col py-2 py-lg-3 mt-3 mt-sm-0 ps-3 pe-3">
      <CycleVideos />

      <div className="ms-2 d-flex">
        <div className="ui-button fa-lg me-3" onClick={togglePause}>
          <i title="Pause or play video" className={getPauseOrPlay}></i>
        </div>
        <div onClick={toggleMuted} className="ui-button me-2">
          <i title="video volume" className={muteClass}></i>
        </div>
      </div>

      <div className={`hard-center slider-container ${muted ? 'disabled' : ''}`}>
        <Slider
          value={props.videoVolume}
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
    videoVolume: state.videoVolume,
    videoPlayer: state.videoPlayer,
    videosPlayed: state.videosPlayed,
  }
}

export default connect(mapStateToProps, {
  setPaused,
  setVideoVolume,
  incrementVideosPlayed,
})(VideoControls)