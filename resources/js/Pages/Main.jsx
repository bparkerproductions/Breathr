import { Head, usePage } from '@inertiajs/react'
import { connect } from 'react-redux'
import { Box } from '@mui/joy'

import { incrementVisitCount } from '@/helpers/store'
import { setVideos, setInitialVideo } from '@/actions/videoList'
import IntroModal from '@/Components/IntroModal'
import Navbar from '@/Components/Navbar'
import TimerControls from '@/Components/TimerControls'
import Search from '@/Components/Search'
import VideoRender from '@/Components/VideoRender'
import Collection from '@/Components/Collection'
import { useEffect } from 'react'

const Main = props => {
    const { auth, user } = usePage().props

    /**
     * Increment the user's visitcount with localStorage,
     * Initially populate video state on load from db,
     * Set initial video with an action creator
     */
    useEffect(() => {
        incrementVisitCount()
        
        if (auth.user) {

            // Mimic YouTube response object for search and set the collection
            const objects = user['collection_items'].map( obj => {
                return {
                    "id": {
                        "videoId": obj.video_id
                    },
                    "snippet": {
                        "title": obj.title,
                        "description": obj.description,
                        "thumbnails": {
                            "high": {
                                "url": obj.thumbnail_url
                            }
                        }
                    }
                    
                }
            })

            props.setVideos(objects)

            // Set default video with action call
            if (auth.user && objects.length) {
                props.setInitialVideo(objects[0]['id']['videoId'])
            } else {
                props.setInitialVideo('Ftm2uv7-Ybw')
            }
        }

    }, [])

    return (
        <Box component="main">
            <Head title="Welcome" />
            <Navbar></Navbar>
            <IntroModal videoPlayer={props.videoPlayer}></IntroModal>
            <TimerControls show={props.showTimer}></TimerControls>
            <Search show={props.showSearch}></Search>
            <Collection show={props.showCollection}></Collection>
            <VideoRender></VideoRender>
        </Box>
    );
}

const mapStateToProps = state => {
    return {
      showSearch: state.isSearchToggled,
      showTimer: state.isTimerToggled,
      showCollection: state.isCollectionToggled,
      videoPlayer: state.videoPlayer,
      videos: state.videos
    }
  }
  
  export default connect(mapStateToProps, {
    setVideos,
    setInitialVideo
  })(Main)

