import { Head } from '@inertiajs/react'
import 'react-notifications/lib/notifications.css'
import { Box, Typography } from '@mui/joy'
import Navbar from '@/Components/Navbar'
import { connect } from 'react-redux'

const Main = ({ ...props }) => {
    return (
        <>
            <Head title="Welcome" />
            {/* <NotificationContainer></NotificationContainer> */}
            <Navbar></Navbar>
            <Box>
                <Typography>Hi</Typography>
            </Box>
        </>
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
