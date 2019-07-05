import React from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'

class AppToggles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      muted: false,
      volume: 50
    }

    this.toggleMuted = this.toggleMuted.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
  }

  toggleMuted() {
    this.setState({ muted: !this.state.muted });
  }

  getMuteClass() {
    return this.state.muted ? 'fas fa-volume-mute' : 'fas fa-volume-up';
  }

  handleVolumeChange(value) {
    this.setState({ volume: value });
    console.log(this.state.volume);
  }

  render() {
    return (
      <aside className="navbar-col video-controls">
        <div className="ui-button" onClick={this.toggleMuted}>
          <i className={this.getMuteClass()}></i>
        </div>

        <div class="hard-center">
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

export default AppToggles;