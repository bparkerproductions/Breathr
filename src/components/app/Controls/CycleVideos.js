import React from 'react'
import { connect } from 'react-redux'
import { selectVideo } from '../../../actions/videoList'
import { incrementVideosPlayed } from './../../../actions'

const CycleVideos = (props) => {

  function isDisabled() {
    return props.videosPlayed > 0 ? '' : 'disabled'
  }

  function nextVideo() {
    // Video is still loading, don't allow next video actions
    if (props.videoPlayer.getPlayerState() === 3) return

    const currentlyPlaying = props.videoPlayer.getVideoData().video_id
    let newVideo = null

    for (let i = 0; i < props.collectionVideos.length; i++) {
      if (props.collectionVideos[i].id.videoId === currentlyPlaying) {
        if (i === props.collectionVideos.length-1) newVideo = props.collectionVideos[0]
        else newVideo = props.collectionVideos[i+1]
      }
    }

    selectVideo(newVideo.id.videoId)
  }

  function previousVideo() {
    // Video is still loading, don't allow next video actions
    if (props.videoPlayer.getPlayerState() === 3) return
    
    const currentlyPlaying = props.videoPlayer.getVideoData().video_id
    let newVideo = null

    for (let i = 0; i < props.collectionVideos.length; i++) {
      if (props.collectionVideos[i].id.videoId === currentlyPlaying) {
        if (i === 0) {
          newVideo = props.collectionVideos[props.collectionVideos.length-1]
        }
        else newVideo = props.collectionVideos[i-1]
      }
    }

    selectVideo(newVideo.id.videoId)
  }

  function selectVideo(id) {
    props.incrementVideosPlayed()
    props.selectVideo(id)
  }

  return (
    <div className={`d-flex me-3 mt-1 ${isDisabled()}`}>
      <div className="ui-button me-1">
        <i
          onClick={previousVideo}
          className="fas fa-step-backward fa-lg"
          title="Go to previous video"
        >
        </i>
      </div>

      <div className="ui-button ms-1">
        <i
          onClick={nextVideo}
          className="fas fa-step-forward fa-lg"
          title="Go to next video"
        >
        </i>
      </div>
    </div>
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