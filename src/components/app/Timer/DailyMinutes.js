import React, { useState } from 'react'
import { connect } from 'react-redux'
import ToolTip from './../../elements/ToolTip'

const DailyMinutes = (props) => {
  const [tooltipToggled, toggleTooltip] = useState(false)

  function getMinutes() {
    return Math.floor(props.secondsForDay/60)
  }

  function toggleTooltipState() {
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
        <span>You have logged</span>
        <span className="emphasize">{getMinutes()}</span>
        <span>minutes today. Keep going!</span>
      </p>
    )
  }
  return (
    <time onClick={toggleTooltipState} className="daily-minutes">
      <ToolTip toggledOuter={tooltipToggled}>
        {getMessage()}
      </ToolTip>
      <span className="minute">
        {getMinutes()}
      </span>
      <span className="label">m</span>
    </time>
  )
}

const mapStateToProps = state => {
  return {
    secondsForDay: state.secondsForDay
  }
}

export default connect(mapStateToProps)(DailyMinutes)