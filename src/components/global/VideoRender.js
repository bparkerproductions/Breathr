import React from 'react';
import Youtube from 'react-youtube';

const VideoRender = ({selectedVideo}) => {
  const options = {
    loop: 1,
    autoplay: 1
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