import React from 'react'
import Youtube from 'react-youtube'
import { connect } from 'react-redux'
import { setVideoPlayer } from './../../actions'
import { options } from './../../helpers/apis/youtube'

const VideoRender = props => {

  /**
   * When the iframe is loaded, call the setVideoPlayer action 
   * when the player state is set as playing
   */
  function setPlayingVideo(event) {
    if (event.target.getPlayerState() === 1) {
      props.setVideoPlayer(event.target)
    }
  }

  if (props.selectedVideo || props.defaultVideo) {
    return (
      <div className="video-render">
        <Youtube
          videoId={props.selectedVideo || props.defaultVideo}
          opts={options}
          onReady={setPlayingVideo}
          onStateChange={setPlayingVideo}
        >
        </Youtube>
      </div>
    )
  }
  else return null
}

const mapStateToProps = (state) => {
  return {
    selectedVideo: state.selectedVideo,
    defaultVideo: state.defaultVideo
  }
}

export default connect(mapStateToProps, {
  setVideoPlayer
})(VideoRender)
