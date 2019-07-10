import React from 'react';
import AppToggles from './../app/Controls/AppToggles';
import VideoControls from './../app/Controls/VideoControls';
import ToggleAll from './../app/Controls/ToggleAll';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="column-center main-nav">
        <div className="inner-container">
          <div className="left">
            <div className="navbar-col">
              <a className="white link"
                target="_blank"
                href="https://github.com/bparkerproductions/Breathr">
                Contribute
              </a>
            </div>
          </div>

          <div className="right">
            <VideoControls />
            <div className="app-toggle-group">
              <AppToggles />
              <ToggleAll />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;