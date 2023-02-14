import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import CollectionControls from './../Controls/Collection'
import { selectVideo } from '../../../actions/videoList'
import { incrementVideosPlayed } from './../../../actions'
import { setPaused } from './../../../actions/appToggles'

const VideoItem = props => {
  /**
   * Call useEffect function when  props.videoPlayer changes 
   * (it means a video was selected and its already in its "loaded" state)
   */
  useEffect(() => {
    setVideoState()
  }, [props.videoPlayer])

  useEffect(() => {
    if (props.videosPlayed === 0) return

    const playingVideoID = props.videoPlayer.getVideoData().video_id
    const selectedVideoID = props.video.id.videoId

    if (playingVideoID === selectedVideoID) pauseOrPlayVideo()
  }, [props.paused])

  const [isPlaying, setIsPlaying] = useState(true)

  const getPauseOrPlay = isPlaying ? 'fas fa-play' : 'far fa-pause-circle'

  function bgImage() {
    return {
      backgroundImage: 'url(' + props.video.snippet.thumbnails.medium.url + ')'
    }
  }

  /**
   * Actions to perform when a new video is selected: 
   * Select a new video, set play/pause state and volume state
   */
  function videoSelected() {
    props.incrementVideosPlayed()
    props.selectVideo(props.video.id.videoId)

    pauseOrPlayVideo()
  }

  /**
   * When the props.videoPlayer prop changes, useEffect will call this
   * function to set play/pause state and volume
   */
  function setVideoState() {
    // No state needs to be updated until a video is played
    if (props.videosPlayed === 0) return

    if (props.videoPlayer) {
      props.videoPlayer.setVolume(props.videoVolume)

      const playingVideoID = props.videoPlayer.getVideoData().video_id
      const selectedVideoID = props.video.id.videoId

      // Update local state for video item play icon
      const isVideoStatePlaying = (playingVideoID === selectedVideoID)

      if (isVideoStatePlaying) {
        props.setPaused(true)
        setIsPlaying(false) 
      } else {
        props.setPaused(false)
        setIsPlaying(true)
      }
    }
  }

  /**
   * Check if the state of the iframe is playing, pause or play based on that
   */
  function pauseOrPlayVideo() {
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

  return (
    <div onClick={videoSelected} style={bgImage()} className="video-preview">
      <div className="control-container">
        <i className={getPauseOrPlay}></i>
      </div>
      <div className="video-controls">
        <CollectionControls 
          video={props.video}
        />
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
    videosPlayed: state.videosPlayed,
    videoVolume: state.videoVolume,
    videoPlayer: state.videoPlayer,
    defaultVideo: state.defaultVideo
  }
}

export default connect(mapStateToProps, {
  selectVideo,
  setPaused,
  incrementVideosPlayed
})(VideoItem)