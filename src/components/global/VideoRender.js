import React from 'react';
import Youtube from 'react-youtube';

const VideoRender = ({selectedVideo}) => {
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

  if(selectedVideo) {
    return (
      <div className="video-render">
        <Youtube
        videoId={selectedVideo}
        opts={options}>
        </Youtube>
      </div>
    );
  }
  else {
    return null;
  }
}

export default VideoRender;