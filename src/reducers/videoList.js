import defaultVideos from './data/defaultVideos';

const videosReducer = (initialVideos=defaultVideos, action) => {
  if(action.type === 'ADD_TO_COLLECTION') {

    //first check if video is already in collection
    return [...initialVideos, action.payload];
  }

  if(action.type === 'REMOVE_FROM_COLLECTION') {
    return initialVideos.filter(video => {
      return action.payload !== video.id.videoId;
    })
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