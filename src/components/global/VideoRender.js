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

  if(props.selectedVideo) {
    return (
      <div className="video-render">
        <Youtube
        videoId={props.selectedVideo}
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
  return { selectedVideo: state.selectedVideo };
}

export default connect(mapStateToProps)(VideoRender);