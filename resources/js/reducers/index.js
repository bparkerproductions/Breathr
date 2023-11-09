import { combineReducers } from 'redux'
import videoList from '@/reducers/videoList'
import appToggles from '@/reducers/appToggles'
import { getTimeForDay, storeTime } from '@/helpers/store'

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

/**
 * Toggles total seconds elapsed for the day and stores the new result in local storage
 */
const secondsForDay = (seconds=getTimeForDay(), action) => {
  // Seconds for the current 24h day
  if (seconds === undefined) return 0

  if (action.type === 'INCREMENT_SECOND') {
    storeTime()
    seconds++
  }
  return seconds
}

export default combineReducers({
  videos: videoList.videosReducer,
  selectedVideo: videoList.selectedVideoReducer,
  searchedVideos: videoList.searchedVideosReducer,
  defaultVideo: videoList.defaultVideoReducer,
  videoPlayer: setVideoReducer,
  videoVolume: setVideoVolumeReducer,
  videosPlayed,
  secondsForDay,
  isSearchToggled: appToggles.toggleSearchReducer,
  isTimerToggled: appToggles.toggleTimerReducer,
  isCollectionToggled: appToggles.toggleCollectionReducer,
  paused: appToggles.setPausedReducer
})
