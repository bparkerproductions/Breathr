import React from 'react';
import Youtube from 'react-youtube';
import { connect } from 'react-redux';

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
    let selected = props.selectedVideo
    return  selected ? selected : props.defaultVideo;
  }

  if(props.selectedVideo || props.defaultVideo) {
    return (
      <div className="video-render">
        <Youtube
        videoId={getSelected()}
        opts={options}>
        </Youtube>
      </div>
    );
  }
  else {
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    selectedVideo: state.selectedVideo,
    defaultVideo: state.defaultVideo
  };
}

export default connect(mapStateToProps)(VideoRender);