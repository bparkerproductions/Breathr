import React from 'react'
import { connect } from 'react-redux'
import { selectVideo } from '@/actions/videoList'
import { incrementVideosPlayed } from '@/actions'

import Stack from '@mui/joy/Stack'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons'
import { usePage } from '@inertiajs/react'

const CycleVideos = props => {
  const { auth } = usePage().props
  
  function isDisabled() {
    // Disable if no video has been played or the "no collection" default video is playing
    if ( props.videosPlayed === 0 || props.videoContext.isDefault) return 'disabled'

    const isPlayingFromCollection = !props.videoContext.isFromCollection && props.isCollection
    // Disable if this component is in <Collection> but the video is playing from search
    if ( isPlayingFromCollection || videoList().length === 1 ) return 'disabled'
  }

  function videoList() {
    if ( !auth.user ) return props.searchedVideos
    else {
      return (props.isCollection || props.videoContext.isFromCollection) ? props.videos : props.searchedVideos
    }
  }

  function nextVideo() {
    // Video is still loading, don't allow next video actions
    if (props.videoPlayer.getPlayerState() === 3) return

    const currentlyPlaying = props.videoPlayer.getVideoData().video_id
    let newVideo = null

    for (let i = 0; i < videoList().length; i++) {
      const id = videoList()[i].id.videoId

      if (id === currentlyPlaying) {
        if (i === videoList().length-1) newVideo = videoList()[0]
        else newVideo = videoList()[i+1]
      }
    }

    selectNewVideo(newVideo.id.videoId)
  }

  function previousVideo() {
    // Video is still loading, don't allow next video actions
    if (props.videoPlayer.getPlayerState() === 3) return

    const currentlyPlaying = props.videoPlayer.getVideoData().video_id
    let newVideo = null

    for (let i = 0; i < videoList().length; i++) {
      const id = videoList()[i].id.videoId
      if (id === currentlyPlaying) {
        if (i === 0) newVideo = videoList()[videoList().length-1]
        else newVideo = videoList()[i-1]
      }
    }

    selectNewVideo(newVideo.id.videoId)
  }

  function selectNewVideo(id) {
    props.incrementVideosPlayed()
    props.selectVideo(id)
  }

  return (
    <Stack direction="row" spacing={1.5} className={isDisabled()}>
      <FontAwesomeIcon
        onClick={previousVideo}
        icon={faStepBackward}
        className={`cursor-pointer ${props.color}`}
        size="lg"
        title="Go to previous video"
      />

      <FontAwesomeIcon
        onClick={nextVideo}
        icon={faStepForward}
        className={`cursor-pointer ${props.color}`}
        size="lg"
        title="Go to next video"
      />
    </Stack>
  )
}

const mapStateToProps = state => { return {
  videosPlayed: state.videosPlayed,
  videos: state.videos,
  videoPlayer: state.videoPlayer,
  searchedVideos: state.searchedVideos,
  videoContext: state.videoContext
} }

export default connect(mapStateToProps, {
  selectVideo,
  incrementVideosPlayed
})(CycleVideos)