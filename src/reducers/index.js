import { combineReducers } from 'redux';
import videoList from './videoList';
import appToggles from './appToggles';
import timer from './timer';

const setVideoReducer = (player=null, action) => {
  return action.type === 'SET_VIDEO_PLAYER' ? action.payload : player;
};


export default combineReducers({
  videos: videoList.videosReducer,
  selectedVideo: videoList.selectedVideoReducer,
  defaultVideo: videoList.defaultVideoReducer,
  videoPlayer: setVideoReducer,
  isSearchToggled: appToggles.toggleSearchReducer,
  isTimerToggled: appToggles.toggleTimerReducer,
  isCollectionToggled: appToggles.toggleCollectionReducer,
  allToggled: appToggles.toggleAllReducer,
  totalSeconds: timer.totalSecondsReducer,
  secondsForDay: timer.secondsForDay
});
