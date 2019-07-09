import React from 'react';
import Youtube from 'react-youtube';
import { connect } from 'react-redux';
import { setVideoPlayer } from './../../actions';

const VideoRender = (props) => {
  const options = {
    playerVars: {
      loop: 1,
      autoplay: 1,
      start: 60,
      frameborder: 0,
      controls: 0,
      color: 'white',
      disablekb: 1,
      enablejsapi: 1,
      iv_load_policy: 3,
      modestbranding: 1
    }
  }

  function getSelected() {
    let selected = props.selectedVideo;
    return selected ? selected : props.defaultVideo;
  }

  function setPlayingVideo(event) {
    props.setVideoPlayer(event.target);
  }

  if(props.selectedVideo || props.defaultVideo) {
    return (
      <div className="video-render">
        <Youtube
        videoId={getSelected()}
        opts={options}
        onReady={setPlayingVideo}
        onStateChange={setPlayingVideo}>
        </Youtube>
      </div>
    );
  }
  else return null;
}

const mapStateToProps = (state) => {
  return {
    selectedVideo: state.selectedVideo,
    defaultVideo: state.defaultVideo,
    videoPlayer: state.videoPlayer
  };
}

export default connect(mapStateToProps, {
  setVideoPlayer
})(VideoRender);
