import React, { useEffect, useCallback } from 'react'
import { connect } from 'react-redux'

const ToolTip = ({ toggledOuter, children, closeTooltip }) => {

  const handleClick = useCallback(() => {
    if (closeTooltip) closeTooltip()
  }, [closeTooltip])

  useEffect(() => {
    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [handleClick])

  if (toggledOuter) {
    return (
      <aside onClick={e => e.stopPropagation()} className="tooltip">
        <div className="triangle"></div>
        <div className="head">
          <div onClick={() => closeTooltip()}>
            <i className="far fa-times-circle cursor-pointer"></i>
          </div>
        </div>
        <div className="tooltip-content">
          {children}
        </div>
      </aside>
    )
  }
  else return null
}

const mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps, {
})(ToolTip)