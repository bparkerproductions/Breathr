import React, {useState} from 'react'
import { connect } from 'react-redux'
import { toggleAll } from './../../../actions/appToggles'

import Box from '@mui/joy/Box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'

const ToggleAll = (props) => {
  const [allToggled, setToggled] = useState(true)

  function getToggleAllClass() {
    if (allToggled) {
      return (
        <FontAwesomeIcon
          onClick={toggleAll}
          icon={faEyeSlash}
          title="Untoggle"
          size="lg"
          className="ui-button"
        />
      )
    } else {
      return (
        <FontAwesomeIcon
          onClick={toggleAll}
          icon={faEye}
          title="Toggle"
          size="lg"
          className="ui-button"
        />
      )
    }
  }

  function toggleAll() {
    setToggled(!allToggled)
    props.toggleAll()
  }

  return (
    <Box id="toggle-all">
      {getToggleAllClass()}
    </Box>
  )
}

const mapStateToProps = state => { return state }

export default connect(mapStateToProps, {
  toggleAll
})(ToggleAll)