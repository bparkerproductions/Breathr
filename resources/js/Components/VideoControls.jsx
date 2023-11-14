import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setVideoVolume, setVideoContext } from '@/actions/videoList'
import { incrementVideosPlayed } from '@/actions'
import { setPaused } from '@/actions/appToggles'

import CycleVideos from '@/Components/CycleVideos'

import { Box, Stack, Slider } from '@mui/joy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeOff, faVolumeHigh, faPlay, faPauseCircle } from '@fortawesome/free-solid-svg-icons'
import { usePage } from '@inertiajs/react'

const VideoControls = props => {
  const { auth, user } = usePage().props

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

      handleVideoContext()
      
      props.incrementVideosPlayed()
    }

    props.setPaused(!props.paused)
    !props.paused ? props.videoPlayer.pauseVideo() : props.videoPlayer.playVideo()
  }

  /**
   * If the user has any collection videos, the first click on the play
   * button will play that first collection video. Set the context if the
   * user collection array isn't empty
   */
  function handleVideoContext() {
    if (auth.user) {
      const hasCollectionItems = user['collection_items'].length ? true : false

      props.setVideoContext({
        isFromCollection: hasCollectionItems,
        isDefault: !hasCollectionItems
      })
    } 
    else {
      // User is logged out, we know they will be on a default video (when no videos have been played) and that it can't be from a collection
      props.setVideoContext({
        ifFromCollection: false,
        isDefault: true
      })
    }
  }

  return (
    <Box id="video-controls">
      <Stack direction="row" alignItems="center" spacing={1.5}>
        <CycleVideos color="text-white" />
        <Box onClick={togglePause} sx={{ width: '20px' }}>
          {props.paused ? 
          <FontAwesomeIcon
            icon={faPlay}
            className="cursor-pointer text-white"
            size="lg"
            title="Play Video"
          /> : 
          <FontAwesomeIcon
            icon={faPauseCircle}
            className="cursor-pointer text-white"
            size="lg"
            title="Pause Video"
          />}
        </Box>

        <Box sx={{ width: '30px' }} onClick={toggleMuted}>
          {muted || props.videoVolume === 0 ? 
          <FontAwesomeIcon
            icon={faVolumeOff}
            className="cursor-pointer text-white"
            size="lg"
          /> : 
          <FontAwesomeIcon
            icon={faVolumeHigh}
            className="cursor-pointer text-white"
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
  setVideoContext
})(VideoControls)