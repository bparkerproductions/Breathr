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

export const toggleSearch = () => {
  return {
    type: 'TOGGLE_SEARCH'
  }
}

export const toggleTimer = () => {
  return {
    type: 'TOGGLE_TIMER'
  }
}

export const toggleCollection = () => {
  return {
    type: 'TOGGLE_COLLECTION'
  }
}
