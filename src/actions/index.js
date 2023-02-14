export const setVideoPlayer = videoTarget => {
  return {
    type: 'SET_VIDEO_PLAYER',
    payload: videoTarget
  }
}

export const incrementSecond = () => {
  return {
    type: 'INCREMENT_SECOND'
  }
}

export const incrementVideosPlayed = () => {
  return {
    type: 'INCREMENT_VIDEOS_PLAYED'
  }
}
