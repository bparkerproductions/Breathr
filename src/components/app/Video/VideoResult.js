import React from 'react';
import { connect } from 'react-redux';

import VideoItem from './VideoItem';

class VideoResult extends React.Component {
  renderResults() {
    return (
      <div className="video-results">
        {this.props.videos.map(video => {
          return <VideoItem key={video.etag} video={video}></VideoItem>
        })}
      </div>
    )
  }
  renderCollection() {
    return (
      <div className="video-results">
        {this.props.collectionVideos.map(video => {
          return <VideoItem key={video.etag} video={video}></VideoItem>
        })}
      </div>
    );
  }
  render() {
    let anyVideos = this.props.videos !== null;

    if(this.props.searchResult && anyVideos) {
      return this.renderResults()
    }
    else if(this.props.grabFromCollection) {
      return this.renderCollection();
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

const mapStateToProps = (state) => {
  return { collectionVideos: state.videos };
}

export default connect(mapStateToProps)(VideoResult);