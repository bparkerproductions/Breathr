import React from 'react'
import { connect } from 'react-redux'
import { selectVideo } from '@/actions/videoList'
import { incrementVideosPlayed } from '@/actions'

import Stack from '@mui/joy/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons'

const CycleVideos = (props) => {
  function isDisabled() {
    if (props.videosPlayed === 0) return 'disabled'
  }

  function nextVideo() {
    // Video is still loading, don't allow next video actions
    if (props.videoPlayer.getPlayerState() === 3) return

    const currentlyPlaying = props.videoPlayer.getVideoData().video_id
    let newVideo = null
    const videoList = props.isCollection ? props.videos : props.searchedVideos

    for (let i = 0; i < videoList.length; i++) {
      const id = videoList[i].id.videoId

      if (id === currentlyPlaying) {
        if (i === videoList.length-1) newVideo = videoList[0]
        else newVideo = videoList[i+1]
      }
    }

    selectNewVideo(newVideo.id.videoId)
  }

  function previousVideo() {
    // Video is still loading, don't allow next video actions
    if (props.videoPlayer.getPlayerState() === 3) return

    const currentlyPlaying = props.videoPlayer.getVideoData().video_id
    let newVideo = null
    const videoList = props.isCollection ? props.videos : props.searchedVideos

    for (let i = 0; i < videoList.length; i++) {
      const id = videoList[i].id.videoId
      if (id === currentlyPlaying) {
        if (i === 0) {
          newVideo = videoList[videoList.length-1]
        }
        else {
          newVideo = videoList[i-1]
        }
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
  searchedVideos: state.searchedVideos
} }

export default connect(mapStateToProps, {
  selectVideo,
  incrementVideosPlayed
})(CycleVideos)