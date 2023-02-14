import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { selectVideo, addToCollection, removeFromCollection } from '../../../actions/videoList'
import { incrementVideosPlayed } from './../../../actions'
import { setPaused } from './../../../actions/appToggles'
import { NotificationManager } from 'react-notifications'

const VideoItem = props => {
  /**
   * Call useEffect function when  props.videoPlayer changes 
   * (it means a video was selected and its already in its "loaded" state)
   */
  useEffect(() => {
    setVideoState()
  }, [props.videoPlayer])

  const [isPlaying, setIsPlaying] = useState(true)

  const getPauseOrPlay = isPlaying ? 'fas fa-play' : 'far fa-pause-circle'

  function bgImage() {
    return {
      backgroundImage: 'url(' + props.video.snippet.thumbnails.medium.url + ')'
    }
  }

  /**
   * Check if video already exists in collection
   */
  function doesVideoExist() {
    for (let i = 0; i < props.videos.length; i++) {
      const videoID = props.videos[i].id.videoId
      const selectedVideoID = props.video.id.videoId

      if (videoID === selectedVideoID) return true
    }

    return false
  }

  /**
   * Add a video to the collection if it exists, otherwise throw a warning message
   */
  function handleAdd(e) {
    e.stopPropagation()

    if (!doesVideoExist()) {
      props.addToCollection(props.video)

      let successMessage = 'Your video has successfully been added to your collection!'
      NotificationManager.success(successMessage, 'Video Added!', 2000)
    }
    else {
      let warningMessage = 'This video is already in your collection!'
      NotificationManager.warning(warningMessage, false, 2000)
    }
  }

  /**
   * Remove a video from a collection by calling the removeFromCollection action
   */
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

  /**
   * Actions to perform when a new video is selected: 
   * Select a new video, set play/pause state and volume state
   */
  function videoSelected() {
    props.incrementVideosPlayed()
    props.selectVideo(props.video.id.videoId)

    const videoIsPlaying = props.videoPlayer.getPlayerState() === 1

    if (videoIsPlaying) {
      props.videoPlayer.pauseVideo()
      props.setPaused(true)
      setIsPlaying(true)
    }
    else {
      props.videoPlayer.playVideo()
      props.setPaused(false)
      setIsPlaying(false)
    }
  }

  /**
   * When the props.videoPlayer prop changes, useEffect will call this
   * function to set play/pause state and volume
   */
  function setVideoState() {
    if (props.videoPlayer) {
      props.videoPlayer.setVolume(props.videoVolume)

      const playingVideoID = props.videoPlayer.getVideoData().video_id
      const selectedVideoID = props.video.id.videoId

      // Update local state for video item play icon
      const isVideoStatePlaying = props.videosPlayed > 0 && (playingVideoID === selectedVideoID)

      if (isVideoStatePlaying) {
        props.setPaused(true)
        setIsPlaying(false) 
      } else {
        props.setPaused(false)
        setIsPlaying(true)
      }
    }
  }

  return (
    <div onClick={videoSelected} style={bgImage()} className="video-preview">
      <div className="control-container">
        <i className={getPauseOrPlay}></i>
      </div>
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
    videosPlayed: state.videosPlayed,
    videoVolume: state.videoVolume,
    videoPlayer: state.videoPlayer,
    defaultVideo: state.defaultVideo
  }
}

export default connect(mapStateToProps, {
  selectVideo,
  addToCollection,
  removeFromCollection,
  setPaused,
  incrementVideosPlayed
})(VideoItem)