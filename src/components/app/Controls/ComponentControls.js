import React from 'react'
import { connect } from 'react-redux'
import { toggleSearch, toggleCollection, toggleTimer } from './../../../actions/appToggles'

import IconButton from '@mui/joy/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowMinimize } from '@fortawesome/free-solid-svg-icons'

const ComponentControls = props => {
  function toggleComponent() {
    if (props.toggleType === 'search') props.toggleSearch(false)
    if (props.toggleType === 'collection') props.toggleCollection(false)
    if (props.toggleType === 'timer') props.toggleTimer(false)
  }

  return (
    <IconButton
      className="component-controls"
      variant="solid"
      color="primary"
      onClick={toggleComponent}
    >
        <FontAwesomeIcon icon={faWindowMinimize} title="minimize" />
    </IconButton>
  )
}

const mapStateToProps = state => { return state }

export default connect(mapStateToProps, {
  toggleCollection,
  toggleSearch,
  toggleTimer
})(ComponentControls)