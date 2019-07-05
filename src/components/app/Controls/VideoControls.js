import React from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import { connect } from 'react-redux';

class AppToggles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      muted: false,
      volume: 100,
      paused: false
    }

    this.toggleMuted = this.toggleMuted.bind(this);
    this.togglePause = this.togglePause.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
  }

  //VOLUME related
  toggleMuted() {
    this.setState({ muted: !this.state.muted });

    let currentVolume = this.state.muted ? this.state.volume : 0;
    this.props.videoPlayer.setVolume(currentVolume);
  }
  getMuteClass() {
    let isMuted = this.state.muted || this.state.volume === 0;
    return isMuted ? 'fas fa-volume-mute' : 'fas fa-volume-up';
  }
  handleVolumeChange(value) {
    this.setState({ volume: value });
    this.props.videoPlayer.setVolume(this.state.volume);
    return this.state.volume;
  }
  sliderDisabled() {
    return this.state.muted ? 'disabled' : '';
  }
  volumeDisabled() {
    return this.state.volume === 0 ? 'disabled' : '';
  }

  //PAUSE related
  getPauseOrPlay() {
    return this.state.paused ? 'fas fa-play' : 'far fa-pause-circle';
  }
  togglePause() {
    this.setState({ paused: !this.state.paused });
    let player = this.props.videoPlayer;
    !this.state.paused ? player.pauseVideo() : player.playVideo();
  }

  render() {
    return (
      <aside className="navbar-col video-controls">
        <div className="ui-button" onClick={this.togglePause}>
          <i className={`far fa-pause-circle ${this.getPauseOrPlay()}`}></i>
        </div>
        <div className={`ui-button ${this.volumeDisabled()}`} onClick={this.toggleMuted}>
          <i className={this.getMuteClass()}></i>
        </div>

        <div className={`hard-center slider-container ${this.sliderDisabled()}`}>
          <Slider
            value={this.state.volume}
            onChange={this.handleVolumeChange}
            tooltip={false}>
          </Slider>
        </div>
      </aside>
    )
  }
}

const mapStateToProps = state => {
  return { videoPlayer: state.videoPlayer };
}

export default connect(mapStateToProps)(AppToggles);