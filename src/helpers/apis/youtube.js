

export const options = {
  playerVars: {
    loop: 1,
    start: 60,
    rel: 0,
    frameborder: 0,
    controls: 0,
    color: 'white',
    disablekb: 1,
    enablejsapi: 1,
    iv_load_policy: 3,
    modestbranding: 1
  }
}

const videoOptions = {
  part: 'snippet',
  maxResults: '9',
  videoEmbeddable: 'true',
  type: 'video',
  videoDefinition: 'high',
  videoDuration: 'long',
  key: process.env.REACT_APP_YOUTUBE_KEY
}

export default videoOptions;