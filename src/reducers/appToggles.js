/**
 * Toggles the state for the search component
 */
const toggleSearchReducer = (toggled=true, action) => {
  if (action.type === 'TOGGLE_SEARCH') return action.payload
  return toggled
}

/**
 * Toggles the state for the timer component
 */
const toggleTimerReducer = (toggled=true, action) => {
  if (action.type === 'TOGGLE_TIMER') return action.payload
  return toggled
}

/**
 * Toggles the state for the collection component
 */
const toggleCollectionReducer = (toggled=false, action) => {
  if (action.type === 'TOGGLE_COLLECTION') return action.payload
  return toggled
}

/**
 * Toggles the state of all page components; hide all/view all
 */
const toggleAllReducer = (toggled=true, action) => {
  if (action.type === 'TOGGLE_ALL') toggled = !toggled
  return toggled
}

/**
 * Sets the state for the YouTube iframe/video playing status
 */
const setPausedReducer = (paused=true, action) => {
  if (action.type === 'SET_PAUSED') return action.payload
  return paused
}

const appToggleReducers = {
  toggleSearchReducer,
  toggleTimerReducer,
  toggleCollectionReducer,
  toggleAllReducer,
  setPausedReducer
}

export default appToggleReducers
