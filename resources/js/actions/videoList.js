/**
 * Called to initially set collection videos from the database
 */
export const setVideos = videos => {
  return {
    type: 'SET_VIDEOS',
    payload: videos
  }
}

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
 * Called when a search is made and videos should be saved
 */
export const saveSearchedVideos = videos => {
  return {
    type: 'SAVE_SEARCHED_VIDEOS',
    payload: videos
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
 * Used to give video context, such as if it was clicked from a collection or search
 */
export const setVideoContext = context => {
  return {
    type: 'SET_VIDEO_CONTEXT',
    payload: context // pass context object
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

/**
 * Set the default video that is loaded initially
 */
export const setInitialVideo = videoId => {
  return {
    type: 'SET_DEFAULT_VIDEO_ID',
    payload: videoId
  }
}