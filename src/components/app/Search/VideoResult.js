import React from 'react';
import VideoItem from './VideoItem';

class VideoResult extends React.Component {
  renderResults() {
    return (
      <div className="video-results">
        {this.props.videos.map(video => {
          return <VideoItem video={video}></VideoItem>
        })}
      </div>
    )
  }
  render() {
    let anyVideos = this.props.videos !== null;

    if(this.props.searchResult && anyVideos) {
      return this.renderResults()
    }
    else {
      return (
        <div className="notification-card">
          <p>Type to search for videos...</p>
        </div>
      );
    }
  }
}

export default VideoResult;