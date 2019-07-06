import React from 'react';
import AppToggles from './../app/Controls/AppToggles';
import VideoControls from './../app/Controls/VideoControls';
import ToggleAll from './../app/Controls/ToggleAll';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="column-center main-nav">
        <div className="inner-container">
          <div className="left"></div>

          <div className="right">
            <VideoControls />
            <AppToggles />
            <ToggleAll />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;