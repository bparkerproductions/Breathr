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
export const toggleTimer = () => {
  return {
    type: 'TOGGLE_TIMER'
  }
}

/**
 * Called when the toggle icon for the collection component is clicked
 */
export const toggleCollection = () => {
  return {
    type: 'TOGGLE_COLLECTION'
  }
}

/**
 * Called when the toggle all icon in the navbar is clicked
 */
export const toggleAll = () => {
  return {
    type: 'TOGGLE_ALL'
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