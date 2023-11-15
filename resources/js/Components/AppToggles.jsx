import React, { useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
import { toggleSearch, toggleTimer, toggleCollection } from '@/actions/appToggles'

import { Stack, ToggleButtonGroup, IconButton, Tooltip } from '@mui/joy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faClock, faBookmark, faTimes } from '@fortawesome/free-solid-svg-icons'

const AppToggles = ({ isSearch, isTimer, isCollection, toggleSearch, toggleTimer, toggleCollection }) => {

  const getValues = useCallback(() => {
    let values = []

    if (isSearch) values.push('search')
    if (isTimer) values.push('timer')
    if (isCollection) values.push('collection')

    return values
  }, [isCollection, isSearch, isTimer])

  // Values state
  const [value, setValue] = React.useState(getValues())

  useEffect(() => {
    setValue(getValues())
  }, [isSearch, isTimer, isCollection, getValues])

  /**
   * Toggle either Search, Timer, or Collection. Update redux state to reflect
   */
  function toggleComponent(newValue) {
    toggleSearch(newValue.includes('search'))
    toggleTimer(newValue.includes('timer'))
    toggleCollection(newValue.includes('collection'))
  }

  function closeAll() {
    toggleSearch(false)
    toggleTimer(false)
    toggleCollection(false)
  }

  return (
    <Stack direction="row" id="app-toggles">
      <Tooltip title="Close all">
        <IconButton onClick={closeAll}>
          <FontAwesomeIcon icon={faTimes} className="text-blue-800" />
        </IconButton>
      </Tooltip>

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
            className="text-blue-800"
            title="Toggle video search"
          />
        </IconButton>
        <IconButton value="timer">
          <FontAwesomeIcon
            icon={faClock}
            className="text-blue-800"
            title="Toggle timer"
          />
        </IconButton>
        <IconButton value="collection">
          <FontAwesomeIcon
            icon={faBookmark}
            className="text-blue-800"
            title="Toggle your collection"
          />
        </IconButton>
      </ToggleButtonGroup>
    </Stack>
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
  toggleCollection,
})(AppToggles)