import { store } from '../helpers/store/general'
import { getInitialVideos, getFirstVideo } from '../helpers/store/videoStore'

/**
 * Add or remove a video from the videos state, which is reflected in the collection component
 */
const videosReducer = (initialVideos=getInitialVideos('videoList'), action) => {
  if (action.type === 'ADD_TO_COLLECTION') {
    let newState = [...initialVideos, action.payload]
    store(newState, 'videoList')
    return newState
  }

  if (action.type === 'REMOVE_FROM_COLLECTION') {
    let newState = initialVideos.filter(video => {
      return action.payload !== video.id.videoId
    })
    store(newState, 'videoList')
    return newState
  }

  return initialVideos
}

/**
 * When videos are searched, save the results
 */
const searchedVideosReducer = (initialVideos=null, action) => {
  if (action.type === 'SAVE_SEARCHED_VIDEOS') {
    console.log('payload', action.payload)
    return initialVideos || action.payload
  }

  return initialVideos
}

/**
 * Grab the first collection video saved or the default rainforest video
 */
const defaultVideoReducer = () => {
  return getFirstVideo('videoList') || 'Ftm2uv7-Ybw'
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
  searchedVideosReducer
}

export default videoListReducers