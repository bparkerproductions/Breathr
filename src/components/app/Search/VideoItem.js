import React from 'react';

const VideoItem = ({video}) => {
  let imageURL = video.snippet.thumbnails.medium.url;
  let bgImage = {
    backgroundImage: 'url(' + imageURL + ')'
  }

  return (
    <div style={bgImage} className="video-preview">
      <div className="overlay-preview">
        <p className="white title">
          {video.snippet.title}
        </p>
        <div className="icon-container">
          <i className="fas fa-play"></i>
        </div>
      </div>
    </div>
  )
}

export default VideoItem;