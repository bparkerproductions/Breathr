import axios from 'axios';

const YOUTUBE_KEY = 'AIzaSyBi6JVDaQRKsi7Jaa6bwaJfvfUMsD_fOUc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: YOUTUBE_KEY
  }
});