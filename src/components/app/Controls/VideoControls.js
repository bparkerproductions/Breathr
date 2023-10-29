import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setVideoVolume } from './../../../actions/videoList'
import { incrementVideosPlayed } from './../../../actions'
import { setPaused } from './../../../actions/appToggles'
import CycleVideos from './CycleVideos'

import Box from '@mui/joy/Box'
import Stack from '@mui/joy/Stack'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeOff, faVolumeHigh, faPlay, faPauseCircle } from '@fortawesome/free-solid-svg-icons'

const VideoControls = props => {
  const [muted, setMuted] = useState(false)
  const [localSliderVolume, setLocalSliderVolume] = useState(props.videoVolume)

  const muteClass = (muted || props.videoVolume === 0) ? 'fas fa-volume-off' : 'fas fa-volume-up'

  function getPauseOrPlay() {
    if (props.paused) {
      return (
        <FontAwesomeIcon
          icon={faPlay}
          className="ui-button"
          size="lg"
          title="Pause Video"
        />
      )
    } else {
      return (
        <FontAwesomeIcon
          icon={faPauseCircle}
          className="ui-button"
          size="lg"
          title="Play Video"
        />
      )
    }
  }

  function getMuteOrPlay() {
    if (muted || props.videoVolume === 0) {
      return (
        <FontAwesomeIcon
          icon={faVolumeOff}
          className="ui-button"
          size="lg"
          title="Turn the volume back on"
        />
      )
    }
    else {
      return (
        <FontAwesomeIcon
          icon={faVolumeHigh}
          className="ui-button"
          size="lg"
          title="Mute volume"
        />
      )
    }
  }

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
    <Box id="video-controls">

      <Stack direction="row" spacing={1.5}>
        <CycleVideos />
        <Box onClick={togglePause}>
          {getPauseOrPlay()}
        </Box>
        <Box onClick={toggleMuted}>
          {getMuteOrPlay()}
        </Box>
      </Stack>

      <Box className={muted || 'disabled'}>
        {/* <Slider
          value={props.videoVolume}
          onChange={handleVolumeChange}
          tooltip={false}>
        </Slider> */}
      </Box>
    </Box>
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