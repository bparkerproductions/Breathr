import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setVideoVolume } from '@/actions/videoList'
import { incrementVideosPlayed } from '@/actions'
import { setPaused } from '@/actions/appToggles'
import CycleVideos from '@/Components/CycleVideos'

import { Box, Stack, Slider } from '@mui/joy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeOff, faVolumeHigh, faPlay, faPauseCircle } from '@fortawesome/free-solid-svg-icons'

const VideoControls = props => {
  const [muted, setMuted] = useState(false)
  const [localSliderVolume, setLocalSliderVolume] = useState(props.videoVolume)

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
      <Stack direction="row" alignItems="center" spacing={1.5}>
        <CycleVideos />
        <Box onClick={togglePause} sx={{ width: '20px' }}>
          {props.paused ? 
          <FontAwesomeIcon
            icon={faPlay}
            className="cursor-pointer"
            size="lg"
            title="Pause Video"
          /> : 
          <FontAwesomeIcon
            icon={faPauseCircle}
            className="cursor-pointer"
            size="lg"
            title="Play Video"
          />}
        </Box>

        <Box sx={{ width: '30px' }} onClick={toggleMuted}>
          {muted || props.videoVolume === 0 ? 
          <FontAwesomeIcon
            icon={faVolumeOff}
            className="cursor-pointer"
            size="lg"
            title="Turn the volume back on"
          /> : 
          <FontAwesomeIcon
            icon={faVolumeHigh}
            className="cursor-pointer"
            size="lg"
            title="Mute volume"
          />}
        </Box>

        <Slider
          disabled={muted}
          color="neutral"
          variant="soft"
          value={props.videoVolume || 0}
          onChange={e => handleVolumeChange(e.target.value)}
          defaultValue={100}
          max={100}
          sx={{width: '100px'}}
        ></Slider>
      </Stack>
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