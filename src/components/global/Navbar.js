import React, {useState} from 'react';
import AppToggles from './../app/Controls/AppToggles';
import VideoControls from './../app/Controls/VideoControls';
import DailyMinutes from './../app/Timer/DailyMinutes';
import ToggleAll from './../app/Controls/ToggleAll';

const Navbar = (props) => {
  const [contentToggled, setContent] = useState(false);

  function toggleContent() {
    setContent(!contentToggled);
  }
  function isToggled() {
    return contentToggled ? 'show' : '';
  }
  function getToggledState() {
    return contentToggled ? 'fas fa-times-circle' : 'fas fa-bars';
  }
  return (
    <nav className="column-center main-nav">
      <div className="inner-container">
        <div className={`left ${isToggled()}`}>
          <div className="mobile-content">
            <div className="navbar-col">
              <a className="white link"
                target="_blank"
                href="https://github.com/bparkerproductions/Breathr">
                Contribute
              </a>
            </div>
            <div className="navbar-col">
              <DailyMinutes></DailyMinutes>
            </div>
          </div>
        </div>

        <div className="right">
          <div onClick={toggleContent} className="mobile-toggle">
            <i className={getToggledState()}></i>
          </div>
          <div className="video-content">
            <VideoControls />
            <div className="app-toggle-group">
              <AppToggles />
              <ToggleAll />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;