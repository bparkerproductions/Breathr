import React from 'react'
import { connect } from 'react-redux'

import { toggleSearch, toggleCollection, toggleTimer } from './../../../actions/appToggles'

const ComponentControls = props => {
  function handleClick() {
    if (props.toggleType === 'search') props.toggleSearch()
    if (props.toggleType === 'collection') props.toggleCollection()
    if (props.toggleType === 'timer') props.toggleTimer()
  }

  return (
    <div className="component-controls">
      <div onClick={handleClick} className="ui-button">
        <i title="minimize" className="far fa-window-minimize text-secondary"></i>
      </div>
    </div>
  )
}

const mapStateToProps = state => { return state }

export default connect(mapStateToProps, {
  toggleCollection,
  toggleSearch,
  toggleTimer
})(ComponentControls)