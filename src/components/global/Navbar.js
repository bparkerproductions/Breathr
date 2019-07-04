import React from 'react';
import AppToggles from './../app/Controls/AppToggles';
import VideoControls from './../app/Controls/VideoControls';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="column-center main-nav">
        <div className="inner-container">
          <div className="left"></div>

          <div className="right">
            <div className="navbar-col">
              <VideoControls></VideoControls>
            </div>
            <div className="navbar-col">
              <AppToggles></AppToggles>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;