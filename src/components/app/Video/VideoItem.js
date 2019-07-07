import React from 'react';
import { connect } from 'react-redux';
import { selectVideo, addToCollection, removeFromCollection } from '../../../actions';
import { NotificationManager } from 'react-notifications';

class VideoItem extends React.Component {
  constructor(props) {
    super(props);

    this.selectVideo = this.selectVideo.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  bgImage() {
    let imageURL = this.props.video.snippet.thumbnails.medium.url;
    return {
      backgroundImage: 'url(' + imageURL + ')'
    }
  }

  selectVideo() {
    let videoID = this.props.video.id.videoId;
    this.props.selectVideo(videoID);
  }

  doesVideoExist() {
    let currentVideos = this.props.videos;
    for(let i=0; i<currentVideos.length; i++) {
      let videoID = currentVideos[i].id.videoId;
      let selectedVideoID = this.props.video.id.videoId;

      if(videoID === selectedVideoID) return true; //already exists
    }

    return false; //doesn't exist yet
  }

  handleAdd(e) {
    e.stopPropagation();

    if(!this.doesVideoExist()) {
      this.props.addToCollection(this.props.video);

      let successMessage = 'Your video has successfully been added to your collection!';
      NotificationManager.success(successMessage, 'Video Added!', 2000)
    }
    else {
      let warningMessage = 'This video is already in your collection!';
      NotificationManager.warning(warningMessage, false, 2000)
    }
  }

  handleRemove(e) {
    e.stopPropagation();
    let videoID = this.props.video.id.videoId;
    this.props.removeFromCollection(videoID);

    let successMessage = 'Your video has successfully been removed from your collection!';
    NotificationManager.success(successMessage, 'Video Removed!', 2000)
  }

  renderControls() {
    if(this.props.canAdd) {
      return (
        <div className="ui-button" onClick={this.handleAdd}>
          <i title="add to collection" className="fas fa-plus-circle"></i>
        </div>
      )
    }
    else {
      return (
        <div className="ui-button" onClick={this.handleRemove}>
          <i title="remove from collection" className="fas fa-minus-circle red"></i>
        </div>
      )
    }
  }

  render() {
    return (
      <div onClick={this.selectVideo} style={this.bgImage()} className="video-preview">
        <div className="video-controls">
          {this.renderControls()}
        </div>
        <div className="overlay-preview">
          <p className="white title">
            {this.props.video.snippet.title}
          </p>
          <div className="icon-container">
            <i className="fas fa-play"></i>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedVideo: state.selectedVideo,
    videos: state.videos
  };
}

export default connect(mapStateToProps, {
  selectVideo,
  addToCollection,
  removeFromCollection
})(VideoItem);