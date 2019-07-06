import { combineReducers } from 'redux';
import videoList from './videoList';
import appToggles from './appToggles';

const setVideoReducer = (player=null, action) => {
  let isPlayer = action.type === 'SET_VIDEO_PLAYER';

  if(isPlayer) player = action.payload;
  return player;
};


export default combineReducers({
  videos: videoList.videosReducer,
  selectedVideo: videoList.selectedVideoReducer,
  defaultVideo: videoList.defaultVideoReducer,
  videoPlayer: setVideoReducer,
  isSearchToggled: appToggles.toggleSearchReducer,
  isTimerToggled: appToggles.toggleTimerReducer,
  isCollectionToggled: appToggles.toggleCollectionReducer,
  allToggled: appToggles.toggleAllReducer
});
