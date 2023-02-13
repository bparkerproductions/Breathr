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

export const selectVideo = video => {
  return {
    type: 'VIDEO_SELECTED',
    payload: video
  }
}

export const setVideoVolume = volume => {
  return {
    type: 'SET_VIDEO_VOLUME',
    payload: volume
  }
}