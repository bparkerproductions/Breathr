import { store } from '../helpers/store/general'
import { getInitialVideos, getFirstVideo } from '../helpers/store/videoStore'

const videosReducer = (initialVideos=getInitialVideos('videoList'), action) => {
  if (action.type === 'ADD_TO_COLLECTION') {

    // First check if video is already in collection
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

const defaultVideoReducer = () => {
  return getFirstVideo('videoList') || 'Ftm2uv7-Ybw'
}

const selectedVideoReducer = (selectedVideo=null, action) => {
  if (action.type === 'VIDEO_SELECTED') return action.payload
  else return selectedVideo
}

const videoListReducers = {
  videosReducer,
  defaultVideoReducer,
  selectedVideoReducer
}

export default videoListReducers