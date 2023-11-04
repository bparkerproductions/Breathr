import React, { useState, useEffect, useCallback } from 'react'
import { connect, useSelector } from 'react-redux'
import CollectionControls from '@/Components/Collection'
import { selectVideo } from '@/actions/videoList'
import { incrementVideosPlayed } from '@/actions'
import { setPaused } from '@/actions/appToggles'
import { Box, Card, CardContent, CardCover, Typography } from '@mui/joy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPauseCircle, faPlay } from '@fortawesome/free-solid-svg-icons'

const VideoItem = ({ videoPlayer, videosPlayed, videoVolume, video, incrementVideosPlayed, selectVideo, setPaused }) => {
  const [isPlaying, setIsPlaying] = useState(false)

   /**
   * Compare ID of current video in component with what is selected
   */
   const isCurrentVideo = useCallback(() => {
    if (!videoPlayer) return

    const playingVideoID = videoPlayer.getVideoData().video_id
    const selectedVideoID = video.id.videoId || video.id

    return playingVideoID === selectedVideoID
  }, [video, videoPlayer])

  /**
   * When the videoPlayer prop changes, useEffect will call this
   * function to set play/pause state and volume
   */
    const setVideoState = useCallback(() => {
      // No state needs to be updated until a video is played
      if (videosPlayed === 0) return
  
      if (videoPlayer) {
        videoPlayer.setVolume(videoVolume)
  
        // Update local state for video item play icon
        if (isCurrentVideo()) {
          // Pause video
          setIsPlaying(true) 
        } else {
          // Play
          setPaused(false)
          setIsPlaying(false)
        }
      }
    }, [isCurrentVideo, setPaused, videoPlayer, videoVolume, videosPlayed])

  /**
   * Call useEffect function when videoPlayer changes 
   * (it means a video was selected and its already in its "loaded" state)
   */
  useEffect(() => {
    // Only run this when video is in its buffering state
    if (videoPlayer && videoPlayer.getPlayerState() === 3) {
      setVideoState()
    }
  }, [setVideoState, videoPlayer])

  /**
   * Used to update each videoItem when the outside play/pause is activated
   */
  const paused = useSelector( state => state.paused )
  
  useEffect(() => {
    if (!isCurrentVideo()) return

    if (videosPlayed === 0) return

    const videoIsPlaying = videoPlayer.getPlayerState() === 1

    videoIsPlaying ? setIsPlaying(false) : setIsPlaying(true)
  }, [paused, isCurrentVideo, videoPlayer, videosPlayed])


  function getPauseOrPlay() {
    if (isPlaying) {
      return <FontAwesomeIcon size="2xl" color="white" icon={faPauseCircle} />
    } else {
      return <FontAwesomeIcon size="2xl" color="white" icon={faPlay} />
    }
  }

  /**
   * Actions to perform when a new video is selected: 
   * Select a new video, set play/pause state and volume state
   */
  function videoSelected() {
    // Initially increment the video count even if the default video is already selected then played
    if (videosPlayed === 0) incrementVideosPlayed()
    
    if (isCurrentVideo()) {
      pauseOrPlay()
    } else {
      incrementVideosPlayed()
      selectVideo(video.id.videoId || video.id)
    }
  }

  function pauseOrPlay() {
    const videoIsPlaying = videoPlayer.getPlayerState() === 1

    if (videoIsPlaying) {
      videoPlayer.pauseVideo()
      setPaused(true)
      setIsPlaying(false)
    }
    else {
      videoPlayer.playVideo()
      setPaused(false)
      setIsPlaying(true)
    }
  }

  function getVideoTitle() {
    const text = document.createElement("textarea")
    text.innerHTML = video.snippet.title
    return text.value
  }

  function getCollectionControls() {

    // Temporary until backend
    const authenticated = false

    if (authenticated) return (
    <CardContent sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start' }}>
        <CollectionControls 
          video={video}
        />
      </CardContent>
    )
  }

  return (
    
    <Card onClick={videoSelected} className="cursor-pointer" sx={{ height: '200px' }}>
      <CardCover>
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.description}
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

      {getCollectionControls()}

      <CardContent sx={{ justifyContent: 'flex-end'  }}>
        <Typography level="body-sm" sx={{ color: 'white' }}>{getVideoTitle()}</Typography>
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