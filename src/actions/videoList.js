/**
 * Called when the "add to collection" button is clicked
 */
export const addToCollection = videoObj => {
  return {
    type: 'ADD_TO_COLLECTION',
    payload: videoObj
  }
}

/**
 * Called when the "remove from collection" button is clicked
 */
export const removeFromCollection = videoID => {
  return {
    type: 'REMOVE_FROM_COLLECTION',
    payload: videoID
  }
}

/**
 * Called when a video preview is clicked and a new video in the iframe should be loaded
 */
export const selectVideo = video => {
  return {
    type: 'VIDEO_SELECTED',
    payload: video
  }
}

/**
 * Called when a control for changing volume or muting a video is activated
 */
export const setVideoVolume = volume => {
  return {
    type: 'SET_VIDEO_VOLUME',
    payload: volume
  }
}