/**
 * Add or remove a video from the videos state, which is reflected in the collection component
 */

const videosReducer = (initialVideos=[], action) => {
  // Set videos initially
  if (action.type === 'SET_VIDEOS') {
    return action.payload;
  }

  if (action.type === 'ADD_TO_COLLECTION') {
    let newState = [...initialVideos, action.payload]
    return newState
  }

  if (action.type === 'REMOVE_FROM_COLLECTION') {
    let newState = initialVideos.filter(video => {
      return action.payload !== video.id.videoId
    })
    return newState
  }

  return initialVideos
}

/**
 * When videos are searched, save the results
 */
const searchedVideosReducer = (initialVideos=null, action) => {
  if (action.type === 'SAVE_SEARCHED_VIDEOS') {
    return initialVideos || action.payload
  }

  return initialVideos
}

/**
 * Grab the first collection video saved or the default rainforest video
 */
const defaultVideoReducer = (initialVideo=null, action) => {
  if (action.type === 'SET_DEFAULT_VIDEO_ID') {
    return action.payload
  }
  return initialVideo
}

/**
 * Keeps video context such as if it was clicked from a collection.
 * Expects an object parameter.
 */
const videoContextReducer = (context={}, action) => {
  if (action.type === 'SET_VIDEO_CONTEXT') {
    return action.payload
  }
  return context
}

/**
 * Sets the state for the currently playing video
 */
const selectedVideoReducer = (selectedVideo=null, action) => {
  if (action.type === 'VIDEO_SELECTED') return action.payload
  else return selectedVideo
}

const videoListReducers = {
  videosReducer,
  defaultVideoReducer,
  selectedVideoReducer,
  searchedVideosReducer,
  videoContextReducer
}

export default videoListReducers