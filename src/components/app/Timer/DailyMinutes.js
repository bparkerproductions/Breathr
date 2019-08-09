import React from 'react';
import { connect } from 'react-redux';

const DailyMinutes = (props) => {
  return (
    <time>
      <span className="minute">
        {Math.floor(props.totalMinutes/10)}
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