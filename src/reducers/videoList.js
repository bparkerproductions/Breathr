import { getInitialVideos, store, getFirstVideo } from './../helpers/localStore';

const videosReducer = (initialVideos=getInitialVideos('videoList'), action) => {
  if(action.type === 'ADD_TO_COLLECTION') {

    //first check if video is already in collection
    let newState = [...initialVideos, action.payload];
    store(newState, 'videoList');
    return newState;
  }

  if(action.type === 'REMOVE_FROM_COLLECTION') {
    let newState = initialVideos.filter(video => {
      return action.payload !== video.id.videoId;
    });
    store(newState, 'videoList');
    return newState;
  }

  return initialVideos;
};

const defaultVideoReducer = () => {
  let firstItem = getFirstVideo('videoList');
  return firstItem ? firstItem : 'Ftm2uv7-Ybw';
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