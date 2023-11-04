import React from 'react'
import { connect } from 'react-redux'
import { toggleSearch, toggleCollection, toggleTimer } from '@/actions/appToggles'

import IconButton from '@mui/joy/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const ComponentControls = props => {
  function toggleComponent() {
    if (props.toggleType === 'search') props.toggleSearch(false)
    if (props.toggleType === 'collection') props.toggleCollection(false)
    if (props.toggleType === 'timer') props.toggleTimer(false)
  }

  return (
    <IconButton
      className="component-controls"
      variant="outline"
      color="warning"
      onClick={toggleComponent}
      sx={{ position: 'absolute', right: 5, top: 3 }}
    >
        <FontAwesomeIcon icon={faTimesCircle} title="Minimize" />
    </IconButton>
  )
}

const mapStateToProps = state => { return state }

export default connect(mapStateToProps, {
  toggleCollection,
  toggleSearch,
  toggleTimer
})(ComponentControls)