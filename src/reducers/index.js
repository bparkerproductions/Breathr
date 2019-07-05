import { combineReducers } from 'redux';

const videosReducer = () => {
  return [
    {
      etag: 'Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/2Ds1rRJWjRLXEJ2fQcsLM_Am2gs',
      id: {
        videoId: 'Ftm2uv7-Ybw'
      },
      snippet: {
        title: '4K Campfire by the River - Relaxing Fireplace',
        thumbnails: {
          medium: {
            url: 'https://i.ytimg.com/vi/Ftm2uv7-Ybw/mqdefault.jpg'
          }
        }
      }
    },
    {
      etag: 'Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/JarNzVTZYsxCvpuR1gy7-hWR1zA',
      id: {
        videoId: 'tXc4C9kQll0'
      },
      snippet: {
        title: 'COZY ATMOSPHERE - Heavy Blizzard Sounds for Sleep, Relax, Study',
        thumbnails: {
          medium: {
            url: 'https://i.ytimg.com/vi/tXc4C9kQll0/mqdefault.jpg'
          }
        }
      }
    },
    {
      etag: 'Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/Y4otUWKi-iq2TMOOXwGNz0eE0Vo',
      id: {
        videoId: 'c9pQYOGIWM8'
      },
      snippet: {
        title: '4k Tropical Rain & Relaxing Nature Sounds',
        thumbnails: {
          medium: {
            url: 'https://i.ytimg.com/vi/c9pQYOGIWM8/mqdefault.jpg'
          }
        }
      }
    },
  ]
};

const defaultVideoReducer = () => {
  return '';
}

const selectedVideoReducer = (selectedVideo=null, action) => {
  if(action.type == 'VIDEO_SELECTED') return action.payload;
  else return selectedVideo;
};

export default combineReducers({
  videos: videosReducer,
  selectedVideo: selectedVideoReducer,
  defaultVideo: defaultVideoReducer
});
