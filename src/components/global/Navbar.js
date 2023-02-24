import React, {useState} from 'react'
import AppToggles from './../app/Controls/AppToggles'
import VideoControls from './../app/Controls/VideoControls'
import DailyMinutes from './../app/Timer/DailyMinutes'
import ToggleAll from './../app/Controls/ToggleAll'

const Navbar = props => {
  const [contentToggled, setContent] = useState(false)

  function getToggledState() {
    return contentToggled ? 'fas fa-times-circle' : 'fas fa-bars'
  }

  return (
    <nav className="column-center main-nav">
      <div className="container">
        <div className={`left ps-3 ${contentToggled ? 'show' : ''}`}>
          <div className="mobile-content">
            <div className="navbar-col">
              <DailyMinutes></DailyMinutes>
            </div>
          </div>
        </div>

        <div className="right">
          <div onClick={() => setContent(!contentToggled)} className="mobile-toggle my-3 mt-lg-0 ps-3 ps-lg-0">
            <i className={getToggledState()}></i>
          </div>
          <div className="video-content h-100">
            <VideoControls />
            <div className="app-toggle-group d-flex ps-3 py-2 py-lg-3">
              <AppToggles />
              <ToggleAll />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar