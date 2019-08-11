import React from 'react';
import { connect } from 'react-redux';
import ToolTip from './../../elements/ToolTip';

const DailyMinutes = (props) => {
  function getMinutes() {
    return Math.floor(props.totalMinutes/10);
  }
  return (
    <time className="daily-minutes">
      <ToolTip>
        <p>
          <span>You have logged</span>
          <span class="emphasize">{getMinutes()}</span>
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