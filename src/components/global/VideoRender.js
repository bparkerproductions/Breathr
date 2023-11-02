import React, { useEffect } from 'react'
import Youtube from 'react-youtube'
import { connect } from 'react-redux'
import { setVideoPlayer } from './../../actions'
import { options } from './../../helpers/apis/youtube'
import { Box } from '@mui/joy'

const VideoRender = props => {
  /**
   * If the video is initially loading, I want autoplay to be off.
   * Set autoplay to 0 if no videos have been played yet, otherwise it should be one
   */
  useEffect(() => {
    props.videosPlayed === 0 ? options.playerVars.autoplay = 0 : options.playerVars.autoplay = 1
  })

  /**
   * When the iframe is loaded, call the setVideoPlayer action 
   * when the player state is set as playing
   */
  function setPlayingVideo(event) {
    props.setVideoPlayer(event.target)
  }
  
  if (props.selectedVideo || props.defaultVideo) {
    return (
      
      <Box className="video-render" sx={{ 
        height: '100%',
        width: '100%',
        position: 'fixed',
        top: '50px',
        left: 0,
        zIndex: -1
       }}>
        <Youtube
          videoId={props.selectedVideo || props.defaultVideo}
          opts={options}
          onReady={setPlayingVideo}
        >
        </Youtube>
      </Box>
    )
  }
  else return null
}

const mapStateToProps = (state) => {
  return {
    selectedVideo: state.selectedVideo,
    defaultVideo: state.defaultVideo,
    videosPlayed: state.videosPlayed,
  }
}

export default connect(mapStateToProps, {
  setVideoPlayer
})(VideoRender)
