import { combineReducers } from 'redux';

const videosReducer = () => {
  return [
    { videoID: 'Ftm2uv7-Ybw' },
    { videoID: 'tXc4C9kQll0' },
    { videoID: 'yhx3JIF7bGU' },
  ]
};

const selectedVideoReducer = (selectedVideo=null, action) => {
  if(action.type == 'VIDEO_SELECTED') return action.payload;
  else return selectedVideo;
};

export default combineReducers({
  videos: videosReducer,
  selectedVideo: selectedVideoReducer
});
