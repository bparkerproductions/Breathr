import React from 'react'
import Youtube from 'react-youtube'
import { connect } from 'react-redux'
import { setVideoPlayer } from './../../actions'
import { options } from './../../helpers/apis/youtube'

const VideoRender = props => {
  function setPlayingVideo(event) {
    props.setVideoPlayer(event.target)
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
