import React, {useState} from 'react';
import { connect } from 'react-redux';
import ToolTip from './../../elements/ToolTip';

const DailyMinutes = (props) => {
  const [tooltipToggled, toggleTooltip] = useState(false);
  function getMinutes() {
    return Math.floor(props.totalMinutes/10);
  }
  function toggleTooltipState() {
    toggleTooltip(!tooltipToggled);
  }
  return (
    <time onClick={toggleTooltipState} className="daily-minutes">
      <ToolTip
      toggledOuter={tooltipToggled}>
        <p>
          <span>You have logged</span>
          <span className="emphasize">{getMinutes()}</span>
          <span>minutes today. Keep going!</span>
        </p>
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
    totalMinutes: state.totalMinutes
  };
}

export default connect(mapStateToProps)(DailyMinutes);