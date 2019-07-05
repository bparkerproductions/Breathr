export const selectVideo = video => {
  return {
    type: 'VIDEO_SELECTED',
    payload: video
  }
}

export const setVideoPlayer = videoTarget => {
  return {
    type: 'SET_VIDEO_PLAYER',
    payload: videoTarget
  }
}
