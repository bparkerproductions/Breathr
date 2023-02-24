import React, { useState } from 'react'
import { connect } from 'react-redux'
import ToolTip from '../../elements/ToolTip'

const NowPlaying = props => {
  const [tooltipToggled, toggleTooltip] = useState(false)

  return (
    <div id="nowPlaying" className="navbar-col ms-3 ms-lg-0 me-3 pe-3 position-relative">
      <div onClick={() => toggleTooltip(!tooltipToggled)}>
        <i className="fas fa-info-circle fa-lg ui-button no-bounce mt-1"></i>
        <ToolTip toggledOuter={tooltipToggled}>
          <p>test</p>
        </ToolTip>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps, {
  
})(NowPlaying)