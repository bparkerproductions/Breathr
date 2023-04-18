import { combineReducers } from 'redux'
import videoList from './videoList'
import appToggles from './appToggles'
import timer from './timer'

/**
 * Set event.target of the Youtube API Iframe to videoPlayer
 */
const setVideoReducer = (player=null, action) => {
  return action.type === 'SET_VIDEO_PLAYER' ? action.payload : player
}

/**
 * Sets the volume state used to update the youtube video and volume slider
 */
const setVideoVolumeReducer = (volume=100, action) => {
  return action.type === 'SET_VIDEO_VOLUME' ? action.payload : volume
}

/**
 * Sets the state for amount of videos played in a session
 */
const videosPlayed = (state=0, action) => {
  if (action.type === 'INCREMENT_VIDEOS_PLAYED') {
    return state+=1
  } else return state
}

export default combineReducers({
  videos: videoList.videosReducer,
  selectedVideo: videoList.selectedVideoReducer,
  searchedVideos: videoList.searchedVideosReducer,
  defaultVideo: videoList.defaultVideoReducer,
  videoPlayer: setVideoReducer,
  videoVolume: setVideoVolumeReducer,
  videosPlayed,
  isSearchToggled: appToggles.toggleSearchReducer,
  isTimerToggled: appToggles.toggleTimerReducer,
  isCollectionToggled: appToggles.toggleCollectionReducer,
  allToggled: appToggles.toggleAllReducer,
  totalSeconds: timer.totalSecondsReducer,
  secondsForDay: timer.secondsForDay,
  paused: appToggles.setPausedReducer
})
