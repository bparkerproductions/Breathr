import { combineReducers } from 'redux';
import videoList from './videoList';

const setVideoReducer = (target, action) => {
  if(action.type === 'SET_VIDEO_PLAYER') {
    return action.payload;
  }
  else {
    return null;
  }
};

export default combineReducers({
  videos: videoList.videosReducer,
  selectedVideo: videoList.selectedVideoReducer,
  defaultVideo: videoList.defaultVideoReducer,
  videoPlayer: setVideoReducer
});
