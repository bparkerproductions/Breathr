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

export const addToCollection = videoObj => {
  return {
    type: 'ADD_TO_COLLECTION',
    payload: videoObj
  }
}

export const removeFromCollection = videoID => {
  return {
    type: 'REMOVE_FROM_COLLECTION',
    payload: videoID
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

export const toggleAll = () => {
  return {
    type: 'TOGGLE_ALL'
  }
}

export const incrementSecond = () => {
  return {
    type: 'INCREMENT_SECOND'
  }
}
