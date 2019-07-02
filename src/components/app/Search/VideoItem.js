import React from 'react';
import { connect } from 'react-redux';
import { selectVideo } from '../../../actions';

class VideoItem extends React.Component {
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
    let videoID = this.props.video.id.videoId;
    this.props.selectVideo(videoID)
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

const mapStateToProps = state => {
  console.log(state);
  return { selectedVideo: state.selectedVideo };
}

export default connect(mapStateToProps, {
  selectVideo
})(VideoItem);