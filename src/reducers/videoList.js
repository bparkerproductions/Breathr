import defaultVideos from './data/defaultVideos';

const videosReducer = (initialVideos=defaultVideos, action) => {
  if(action.type === 'ADD_TO_COLLECTION') {
    console.log(action.payload);
  }

  return initialVideos;
};

const defaultVideoReducer = () => {
  return 'tXc4C9kQll0';
}

const selectedVideoReducer = (selectedVideo=null, action) => {
  if(action.type === 'VIDEO_SELECTED') return action.payload;
  else return selectedVideo;
};

export default {
  videosReducer,
  defaultVideoReducer,
  selectedVideoReducer
}