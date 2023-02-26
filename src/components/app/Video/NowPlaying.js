import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import ToolTip from '../../elements/ToolTip'

const NowPlaying = props => {
  const [tooltipToggled, toggleTooltip] = useState(false)

  function getPlayerInfo(item) {
    if (props.videoPlayer && props.videoPlayer.playerInfo) {
      return props.videoPlayer.playerInfo[item]
    }
  }

  function getVideoData(item) {
    if (props.videoPlayer && props.videoPlayer.playerInfo) {
      return props.videoPlayer.playerInfo.videoData[item]
    }
  }

  function tooltipActivated(e) {
    e.stopPropagation()
    toggleTooltip(!tooltipToggled)
  }

  return (
    <div id="nowPlaying" className="ms-3 ms-lg-0 me-2 pe-2 position-relative">
      <div onClick={tooltipActivated}>
        <i className="fas fa-info-circle fa-lg ui-button no-bounce mt-1" title="Get information about the current video"></i>
      </div>
      <ToolTip 
        toggledOuter={tooltipToggled} 
        closeTooltip={() => { toggleTooltip(false) }}
      >
        <ul className="list-unstyled m-0 p-0">
          <li className="pb-2 mb-2 border-bottom">
            <a 
              target="_blank"
              rel="noreferrer"
              title="Open this video in Youtube"
              href={getPlayerInfo('videoUrl')}
            >
              <i className="fab fa-youtube text-danger fa-2x cursor-pointer"></i>
            </a>
          </li>
          <li className="pt-1 mt-1 pb-2 mb-2 border-bottom">
            <p className="fw-bold text-primary mb-1">Now Playing</p>
            <p className="fw-light">{getVideoData('title')}</p>
          </li>
          <li className="py-1 my-1 border-bottom">
            <p className="fw-bold text-primary mb-1">Duration</p>
            <p className="fw-light">{Math.ceil(getPlayerInfo('duration')/60)} minutes</p>
          </li>
        </ul>
      </ToolTip>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    videoPlayer: state.videoPlayer,
  }
}

export default connect(mapStateToProps, {
  
})(NowPlaying)