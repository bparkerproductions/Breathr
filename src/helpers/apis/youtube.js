import axios from 'axios';
console.log(process.env)
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 21,
    videoEmbeddable: true,
    type: 'video',
    videoDefinition: 'high',
    videoDuration: 'long',
    key: process.env.REACT_APP_YOUTUBE_KEY,
  }
});