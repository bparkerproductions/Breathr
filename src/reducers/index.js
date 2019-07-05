import { combineReducers } from 'redux';
import videoList from './videoList';
import appToggles from './appToggles';

const setVideoReducer = (target, action) => {
  let isPlayer = action.type === 'SET_VIDEO_PLAYER';
  return isPlayer ? action.payload : null;
};


export default combineReducers({
  videos: videoList.videosReducer,
  selectedVideo: videoList.selectedVideoReducer,
  defaultVideo: videoList.defaultVideoReducer,
  videoPlayer: setVideoReducer,
  isSearchToggled: appToggles.toggleSearchReducer,
  isTimerToggled: appToggles.toggleTimerReducer,
  isCollectionToggled: appToggles.toggleCollectionReducer
});
