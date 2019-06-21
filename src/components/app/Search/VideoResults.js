import React from 'react';

class VideoResults extends React.Component {
  render() {
    if(this.props.isSearching) {
      return (
        <div className="video-results">
          <p>Video results here</p>
        </div>
      )
    }
    else {
      return <p>Search Video...</p>
    }
  }
}

export default VideoResults;