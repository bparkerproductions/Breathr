import React from 'react';
import SelectedVideoContext from './../../../contexts/SelectedVideo';

class VideoItem extends React.Component {
  static contextType = SelectedVideoContext;

  constructor(props) {
    super(props);

    this.selectVideo = this.selectVideo.bind(this);
  }

  bgImage() {
    let imageURL = this.props.video.snippet.thumbnails.medium.url;
    return {
      backgroundImage: 'url(' + imageURL + ')'
    }
  }
  selectVideo() {
    this.context(this.props.video.id.videoId);
  }
  render() {
    return (
      <div onClick={this.selectVideo} style={this.bgImage()} className="video-preview">
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

export default VideoItem;