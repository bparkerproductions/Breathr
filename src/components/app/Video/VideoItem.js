import React from 'react';
import { connect } from 'react-redux';
import { selectVideo, addToCollection, removeFromCollection } from '../../../actions';

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

  handleAdd(e) {
    e.stopPropagation();
    this.props.addToCollection(this.props.video);
  }

  handleRemove(e) {
    e.stopPropagation();
    let videoID = this.props.video.id.videoId;
    this.props.removeFromCollection(videoID);
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
  return { selectedVideo: state.selectedVideo };
}

export default connect(mapStateToProps, {
  selectVideo,
  addToCollection,
  removeFromCollection
})(VideoItem);