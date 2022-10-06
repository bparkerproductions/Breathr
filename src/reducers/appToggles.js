const toggleSearchReducer = (toggled=true, action) => {
  if (action.type === 'TOGGLE_SEARCH') toggled = !toggled
  return toggled
}

const toggleTimerReducer = (toggled=true, action) => {
  if (action.type === 'TOGGLE_TIMER') toggled = !toggled
  return toggled
}

const toggleCollectionReducer = (toggled=false, action) => {
  if (action.type === 'TOGGLE_COLLECTION') toggled = !toggled
  return toggled
}

const toggleAllReducer = (toggled=true, action) => {
  if (action.type === 'TOGGLE_ALL') toggled = !toggled
  return toggled
}

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
