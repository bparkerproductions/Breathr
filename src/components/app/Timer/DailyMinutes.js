import React, { useState } from 'react'
import { connect } from 'react-redux'
import ToolTip from './../../elements/ToolTip'

const DailyMinutes = (props) => {
  const [tooltipToggled, toggleTooltip] = useState(false)

  function getMinutes() {
    return Math.floor(props.secondsForDay/60);
  }


  function toggleTooltipState() {
    toggleTooltip(!tooltipToggled)
  }

  function tooltipActivated(e) {
    e.stopPropagation()
    toggleTooltip(!tooltipToggled)
  }

  function getMessage() {
    if (props.secondsForDay < 60) {
      return (
        <p>You haven't logged any time yet. Go ahead and start the timer to start tracking.</p>
      )
    }
    return (
      <p>
        You have logged<span className="emphasize">{getMinutes()}</span>
        { getMinutes() > 1 ? "minutes" : "minute" } today. Keep going!
      </p>
    )
  }
  return (
    <time onClick={toggleTooltipState} className="daily-minutes">
      <ToolTip 
        toggledOuter={tooltipToggled}
        closeTooltip={() => toggleTooltip(false)}
      >
        {getMessage()}
      </ToolTip>

      <div onClick={tooltipActivated} className="cursor-pointer">
        <span className="minute text-white">
          {getMinutes()}
        </span>
        <span className="label text-white">m</span>
      </div>
    </time>
  )
}

const mapStateToProps = state => {
  return {
    secondsForDay: state.secondsForDay
  }
}

export default connect(mapStateToProps)(DailyMinutes)