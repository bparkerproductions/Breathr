import React, {useState} from 'react'
import { connect } from 'react-redux'
import { toggleAll } from './../../../actions/appToggles'

import { Box, Button } from '@mui/joy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'

const ToggleAll = (props) => {
  const [allToggled, setToggled] = useState(true)

  function getToggleAllClass() {
    if (allToggled) {
      return (
        <Button
          onClick={toggleAll}
          size="sm"
          variant="soft"
          color="primary"
          startDecorator={<FontAwesomeIcon icon={faEyeSlash} />}>
            Hide All
        </Button>
      )
    } else {
      return (
        <Button
          onClick={toggleAll}
          size="sm"
          variant="soft"
          color="primary"
          startDecorator={<FontAwesomeIcon icon={faEye} />}>
            Show All
        </Button>
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