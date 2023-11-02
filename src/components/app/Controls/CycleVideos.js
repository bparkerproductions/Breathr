import React from 'react'
import { connect } from 'react-redux'
import { selectVideo } from '../../../actions/videoList'
import { incrementVideosPlayed } from './../../../actions'

import Stack from '@mui/joy/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons'
import { Box } from '@mui/joy';

const CycleVideos = (props) => {
  function isDisabled() {
    return props.videosPlayed === 0 || props.collectionVideos.length <= 1 ? 'disabled' : ''
  }

  function nextVideo() {
    // Video is still loading, don't allow next video actions
    if (props.videoPlayer.getPlayerState() === 3) return

    const currentlyPlaying = props.videoPlayer.getVideoData().video_id
    let newVideo = null

    for (let i = 0; i < props.collectionVideos.length; i++) {
      const id = props.collectionVideos[i].id.videoId || props.collectionVideos[i].id

      if (id === currentlyPlaying) {
        if (i === props.collectionVideos.length-1) newVideo = props.collectionVideos[0]
        else newVideo = props.collectionVideos[i+1]
      }
    }

    selectVideo(newVideo.id.videoId || newVideo.id)
  }

  function previousVideo() {
    // Video is still loading, don't allow next video actions
    if (props.videoPlayer.getPlayerState() === 3) return

    const currentlyPlaying = props.videoPlayer.getVideoData().video_id
    let newVideo = null

    for (let i = 0; i < props.collectionVideos.length; i++) {
      const id = props.collectionVideos[i].id.videoId || props.collectionVideos[i].id
      if (id === currentlyPlaying) {
        if (i === 0) {
          newVideo = props.collectionVideos[props.collectionVideos.length-1]
        }
        else newVideo = props.collectionVideos[i-1]
      }
    }

    selectVideo(newVideo.id.videoId || newVideo.id)
  }

  function selectVideo(id) {
    props.incrementVideosPlayed()
    props.selectVideo(id)
  }

  return (
    <Stack direction="row" spacing={1.5} className={isDisabled()}>
      <FontAwesomeIcon
        onClick={previousVideo}
        icon={faStepBackward}
        className="cursor-pointer"
        size="lg"
        title="Go to previous video"
      />

      <FontAwesomeIcon
        onClick={nextVideo}
        icon={faStepForward}
        className="cursor-pointer"
        size="lg"
        title="Go to next video"
      />
    </Stack>
  )
}

const mapStateToProps = state => { return {
  videosPlayed: state.videosPlayed,
  collectionVideos: state.videos,
  videoPlayer: state.videoPlayer,
} }

export default connect(mapStateToProps, {
  selectVideo,
  incrementVideosPlayed
})(CycleVideos)