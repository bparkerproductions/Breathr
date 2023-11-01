import React, { useState, useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import CollectionControls from './../Controls/Collection'
import { selectVideo } from '../../../actions/videoList'
import { incrementVideosPlayed } from './../../../actions'
import { setPaused } from './../../../actions/appToggles'
import { Box, Card, CardContent, CardCover, Typography } from '@mui/joy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPauseCircle, faPlay } from '@fortawesome/free-solid-svg-icons'

const VideoItem = props => {
  /**
   * Call useEffect function when props.videoPlayer changes 
   * (it means a video was selected and its already in its "loaded" state)
   */
  useEffect(() => {
    // Only run this when video is in its buffering state
    if (props.videoPlayer && props.videoPlayer.getPlayerState() === 3) {
      setVideoState()
    }
  })

  /**
   * Used to update each videoItem when the outside play/pause is activated
   */
  const paused = useSelector( state => state.paused )
  useEffect(() => {
    if (!isCurrentVideo()) return

    if (props.videosPlayed === 0) return

    const videoIsPlaying = props.videoPlayer.getPlayerState() === 1

    videoIsPlaying ? setIsPlaying(false) : setIsPlaying(true)
  }, [paused])

  const [isPlaying, setIsPlaying] = useState(false)


  function getPauseOrPlay() {
    if (isPlaying) {
      return <FontAwesomeIcon size="2xl" color="white" icon={faPauseCircle} />
    } else {
      return <FontAwesomeIcon size="2xl" color="white" icon={faPlay} />
    }
  }

  /**
   * Compare ID of current video in component with what is selected
   */
  function isCurrentVideo() {
    if (!props.videoPlayer) return

    const playingVideoID = props.videoPlayer.getVideoData().video_id
    const selectedVideoID = props.video.id.videoId || props.video.id

    return playingVideoID === selectedVideoID
  }

  /**
   * Actions to perform when a new video is selected: 
   * Select a new video, set play/pause state and volume state
   */
  function videoSelected() {
    // Initially increment the video count even if the default video is already selected then played
    if (props.videosPlayed === 0) props.incrementVideosPlayed()
    
    if (isCurrentVideo()) {
      pauseOrPlay()
    } else {
      props.incrementVideosPlayed()
      props.selectVideo(props.video.id.videoId || props.video.id)
    }
  }

  function pauseOrPlay() {
    const videoIsPlaying = props.videoPlayer.getPlayerState() === 1

    if (videoIsPlaying) {
      props.videoPlayer.pauseVideo()
      props.setPaused(true)
      setIsPlaying(false)
    }
    else {
      props.videoPlayer.playVideo()
      props.setPaused(false)
      setIsPlaying(true)
    }
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

      // Update local state for video item play icon
      if (isCurrentVideo()) {
        // Pause video
        setIsPlaying(true) 
      } else {
        // Play
        props.setPaused(false)
        setIsPlaying(false)
      }
    }
  }

  return (
    
    <Card onClick={videoSelected} sx={{ height: '200px', cursor: 'pointer' }}>
      <CardCover>
        <img
          src={props.video.snippet.thumbnails.medium.url}
          alt={props.video.snippet.description}
        />
      </CardCover>

      <CardCover sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.2), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0) 300px)',
            paddingLeft: 3,
            paddingRight: 3,
            justifyContent: 'flex-end'
        }}>
        <Box>
          {getPauseOrPlay()}
        </Box>
      </CardCover>

      {/* <CardContent sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start' }}>
        <CollectionControls 
          video={props.video}
        />
      </CardContent> */}

      <CardContent sx={{ justifyContent: 'flex-end'  }}>
        <Typography level="body-sm" sx={{ color: 'white' }}>{props.video.snippet.title}</Typography>
      </CardContent>
    </Card>
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