import axios from 'axios';

const YOUTUBE_KEY = 'AIzaSyBi6JVDaQRKsi7Jaa6bwaJfvfUMsD_fOUc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 21,
    videoEmbeddable: true,
    type: 'video',
    videoDefinition: 'high',
    videoDuration: 'long',
    key: YOUTUBE_KEY,
  }
});