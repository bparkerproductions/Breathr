import React from 'react';

const toolTip = (props) => {
  return (
    <div className="tooltip">
      <div className="triangle"></div>
      <div class="head">
        <i class="far fa-times-circle"></i>
      </div>
      <div className="tooltip-content">
        {props.children}
      </div>
    </div>
  )
}

export default toolTip;