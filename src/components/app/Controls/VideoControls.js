import React from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import { connect } from 'react-redux';

class AppToggles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      muted: false,
      volume: 100
    }

    this.toggleMuted = this.toggleMuted.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
  }

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
    console.log('on change')
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

  render() {
    return (
      <aside className="navbar-col video-controls">
        <div className={`ui-button ${this.volumeDisabled()}`} onClick={this.toggleMuted}>
          <i className={this.getMuteClass()}></i>
        </div>

        <div className={`hard-center slider-container ${this.sliderDisabled()}`}>
          <Slider
            value={this.state.volume}
            onChange={this.handleVolumeChange}
            onChangeComplete={this.handleVolumeChange}
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