import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { NotificationContainer } from 'react-notifications'
import 'react-notifications/lib/notifications.css'
import { incrementVisitCount, createTimeTrack } from '../helpers/store/general'

import Navbar from './global/Navbar'
import IntroModal from './global/IntroModal'
import VideoRender from './global/VideoRender'
import TimerControls from './app/Timer/TimerControls'
import Search from './app/Search/Search'
import Collection from './app/Video/Collection'
import { Box } from '@mui/joy'

const App = (props) => {
  useEffect(() => {
    incrementVisitCount()
    createTimeTrack()
  })

  return (
    <Box component="main">
      <NotificationContainer></NotificationContainer>
      <Navbar />
      <IntroModal videoPlayer={props.videoPlayer}></IntroModal>
      <TimerControls
        allToggled={props.allToggled}
        show={props.showTimer}>
      </TimerControls>

      <Search
        allToggled={props.allToggled}
        show={props.showSearch}>
      </Search>

      <Collection
        allToggled={props.allToggled}
        show={props.showCollection}>
      </Collection>

      <VideoRender></VideoRender>
    </Box>
  )
}

const mapStateToProps = state => {
  return {
    showSearch: state.isSearchToggled,
    showTimer: state.isTimerToggled,
    showCollection: state.isCollectionToggled,
    allToggled: state.allToggled,
    videoPlayer: state.videoPlayer
  }
}

export default connect(mapStateToProps)(App)