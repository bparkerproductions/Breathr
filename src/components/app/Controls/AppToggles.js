import React from 'react';
import { connect } from 'react-redux';
import { toggleSearch, toggleTimer, toggleCollection } from './../../../actions/appToggles'

import Box from '@mui/joy/Box'
import Stack from '@mui/joy/Stack'
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup'
import IconButton from '@mui/joy/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faClock, faBookmark} from '@fortawesome/free-solid-svg-icons'

const AppToggles = (props) => {
  const [value, setValue] = React.useState(getDefaultValues())

  function getDefaultValues() {
    let values = []

    if (props.isSearch) values.push('search')
    if (props.isTimer) values.push('timer')
    if (props.isCollection) values.push('collection')

    return values

  }

  /**
   * Toggle either Search, Timer, or Collection. Update redux state to reflect
   */
  function toggleComponent(newValue) {
    props.toggleSearch(newValue.includes('search'))
    props.toggleTimer(newValue.includes('timer'))
    props.toggleCollection(newValue.includes('collection'))
  }

  return (
    <Box id="app-toggles">
      <ToggleButtonGroup
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
          toggleComponent(newValue)
        }}
      >
        <IconButton value="search">
          <FontAwesomeIcon
            icon={faSearch}
            title="Toggle video search"
          />
        </IconButton>
        <IconButton value="timer">
          <FontAwesomeIcon
            icon={faClock}
            title="Toggle timer"
          />
        </IconButton>
        <IconButton value="collection">
          <FontAwesomeIcon
            icon={faBookmark}
            title="Toggle your collection"
          />
        </IconButton>
      </ToggleButtonGroup>
    </Box>
  )
}

const mapStateToProps = state => {
  return {
    isSearch: state.isSearchToggled,
    isTimer: state.isTimerToggled,
    isCollection: state.isCollectionToggled
  }
}

export default connect(mapStateToProps, {
  toggleSearch,
  toggleTimer,
  toggleCollection
})(AppToggles);