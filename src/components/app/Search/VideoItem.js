import React from 'react';

const VideoItem = ({video}) => {
  return (
    <div className="video-preview">
      <img src={video.snippet.thumbnails.medium.url} alt=""/>
    </div>
  )
}

export default VideoItem;