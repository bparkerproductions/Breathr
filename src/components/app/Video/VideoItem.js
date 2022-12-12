import React, { useState } from 'react'
import { connect } from 'react-redux'
import { selectVideo, addToCollection, removeFromCollection } from '../../../actions/videoList'
import { setPaused } from './../../../actions/appToggles'
import { NotificationManager } from 'react-notifications'

const VideoItem = props => {
  function bgImage() {
    return {
      backgroundImage: 'url(' + props.video.snippet.thumbnails.medium.url + ')'
    }
  }

  function doesVideoExist() {
    for (let i = 0; i < props.videos.length; i++) {
      let videoID = props.videos[i].id.videoId
      let selectedVideoID = props.video.id.videoId

      if (videoID === selectedVideoID) return true
    }

    return false
  }

  function handleAdd(e) {
    e.stopPropagation()

    if(!doesVideoExist()) {
      props.addToCollection(props.video)

      let successMessage = 'Your video has successfully been added to your collection!'
      NotificationManager.success(successMessage, 'Video Added!', 2000)
    }
    else {
      let warningMessage = 'This video is already in your collection!'
      NotificationManager.warning(warningMessage, false, 2000)
    }
  }

  function handleRemove(e) {
    e.stopPropagation()
    let videoID = props.video.id.videoId
    props.removeFromCollection(videoID)

    let successMessage = 'Your video has successfully been removed from your collection!'
    NotificationManager.success(successMessage, 'Video Removed!', 2000)
  }

  function renderControls() {
    if(!doesVideoExist()) {
      return (
        <div className="ui-button" onClick={handleAdd}>
          <i title="Add to collection" className="fas fa-plus-circle"></i>
        </div>
      )
    }
    else {
      return (
        <div className="ui-button" onClick={handleRemove}>
          <i title="remove from collection" className="fas fa-minus-circle red"></i>
        </div>
      )
    }
  }

  function videoSelected() {
    props.selectVideo(props.video.id.videoId)

    const isPlaying = props.videoPlayer.getPlayerState() === 1 || false
    props.setPaused(!isPlaying)

    if (props.paused) props.videoPlayer.playVideo()
    else props.videoPlayer.pauseVideo()
  }

  return (
    <div onClick={videoSelected} style={bgImage()} className="video-preview">
      <div className="video-controls">
        {renderControls()}
      </div>
      <div className="overlay-preview">
        <p className="white title">
          {props.video.snippet.title}
        </p>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    paused: state.paused,
    selectedVideo: state.selectedVideo,
    videos: state.videos,
    videoPlayer: state.videoPlayer
  }
}

export default connect(mapStateToProps, {
  selectVideo,
  addToCollection,
  removeFromCollection,
  setPaused
})(VideoItem)