import defaultVideos from './data/defaultVideos';

function doesVideoExist(initialVideos, action) {
  for(let i=0; i<initialVideos.length; i++) {
    let videoID = initialVideos[i].id.videoId;
    let selectedVideoID = action.payload.id.videoId;

    if(videoID === selectedVideoID) return true; //already exists
  }

  return false; //doesn't exist yet
}

const videosReducer = (initialVideos=defaultVideos, action) => {
  if(action.type === 'ADD_TO_COLLECTION') {

    //first check if video is already in collection
    let exists = doesVideoExist(initialVideos, action);
    return exists ? initialVideos : [...initialVideos, action.payload];
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