import { Head } from '@inertiajs/react'
import 'react-notifications/lib/notifications.css'
import { connect } from 'react-redux'
import { Box } from '@mui/joy'

import IntroModal from '@/Components/IntroModal'
import Navbar from '@/Components/Navbar'
import TimerControls from '@/Components/TimerControls'
import Search from '@/Components/Search'
import VideoRender from '@/Components/VideoRender'

const Main = ({ ...props }) => {
    return (
        <Box component="main">
            <Head title="Welcome" />
            {/* <NotificationContainer></NotificationContainer> */}
            <Navbar></Navbar>
            <IntroModal videoPlayer={props.videoPlayer}></IntroModal>
            <TimerControls show={props.showTimer}></TimerControls>
            <Search show={props.showSearch}></Search>
            <VideoRender></VideoRender>
        </Box>
    );
}

const mapStateToProps = state => {
    return {
      showSearch: state.isSearchToggled,
      showTimer: state.isTimerToggled,
      showCollection: state.isCollectionToggled,
      videoPlayer: state.videoPlayer
    }
  }
  
  export default connect(mapStateToProps)(Main)
