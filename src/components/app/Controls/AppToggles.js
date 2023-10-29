import React from 'react';
import { connect } from 'react-redux';
import { toggleSearch, toggleTimer, toggleCollection } from './../../../actions/appToggles'

import Box from '@mui/joy/Box'
import Stack from '@mui/joy/Stack'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faClock, faBookmark} from '@fortawesome/free-solid-svg-icons'

const AppToggles = (props) => {
  function getIconClasses(toggleType) {
    return props[toggleType] ? 'ui-button' : 'ui-button turned-off';
  }

  /**
   * Toggle either Search, Timer, or Collection. Update redux state to reflect
   */
  function toggleIcon(toggleType) {
    if (toggleType === 'search') props.toggleSearch();
    if (toggleType === 'timer') props.toggleTimer();
    if (toggleType === 'collection') props.toggleCollection();
  }

  return (
    <Box id="app-toggles">
      <Stack direction="row" spacing={1.5}>
        <Box
          onClick={()=>{toggleIcon('search')}}
          className={getIconClasses('isSearch')}>
            <FontAwesomeIcon
              icon={faSearch}
              title="Toggle video search"
            />
        </Box>
        <Box
          onClick={()=>{toggleIcon('timer')}}
          className={getIconClasses('isTimer')}>
            <FontAwesomeIcon
              icon={faClock}
              title="Toggle timer"
            />
        </Box>
        <Box
          onClick={()=>{toggleIcon('collection')}}
          className={getIconClasses('isCollection')}>
            <FontAwesomeIcon
              icon={faBookmark}
              title="Toggle your collection"
            />
        </Box>
      </Stack>
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