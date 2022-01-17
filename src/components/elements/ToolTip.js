import React from 'react'

const toolTip = (props) => {

  if(props.toggledOuter) {
    return (
      <aside className="tooltip">
        <div className="triangle"></div>
        <div className="head">
          <i className="far fa-times-circle"></i>
        </div>
        <div className="tooltip-content">
          {props.children}
        </div>
      </aside>
    )
  }
  else return null
}

export default toolTip