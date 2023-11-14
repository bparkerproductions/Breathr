/**
 * Called when the youtube iFrame video is reloaded or changed
 */
export const setVideoPlayer = videoTarget => {
  return {
    type: 'SET_VIDEO_PLAYER',
    payload: videoTarget
  }
}

/**
 * Called when the timer component increments a second
 */
export const incrementSecond = () => {
  return {
    type: 'INCREMENT_SECOND'
  }
}

/**
 * Called when an action that causes a video to play is activated(play/pause and video click)
 */
export const incrementVideosPlayed = () => {
  return {
    type: 'INCREMENT_VIDEOS_PLAYED'
  }
}

/**
 * Called to set the snackbar/alert message "Open" indicator globally using MUI's <Snackbar component>
 */
export const setSnackbarOpen = isOpen => {
  return {
    type: 'SET_SNACKBAR_OPEN',
    payload: isOpen
  }
}

/**
 * Called to set the snackbar/alert message "Message" indicator globally using MUI's <Snackbar component>
 */
export const setSnackbarMessage = message => {
  return {
    type: 'SET_SNACKBAR_MESSAGE',
    payload: message
  }
}