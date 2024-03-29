/**
 * Called when the toggle icon for the search component is clicked
 */
export const toggleSearch = (toggled=false) => {
  return {
    type: 'TOGGLE_SEARCH',
    payload: toggled
  }
}

/**
 * Called when the toggle icon for the timer component is clicked
 */
export const toggleTimer = (toggled=false) => {
  return {
    type: 'TOGGLE_TIMER',
    payload: toggled
  }
}

/**
 * Called when the toggle icon for the collection component is clicked
 */
export const toggleCollection = (toggled=false) => {
  return {
    type: 'TOGGLE_COLLECTION',
    payload: toggled
  }
}

/**
 * Called when a pause/play icon is clicked
 */
export const setPaused = (paused=true) => {
  return {
    type: 'SET_PAUSED',
    payload: paused
  }
}