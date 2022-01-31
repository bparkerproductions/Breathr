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
