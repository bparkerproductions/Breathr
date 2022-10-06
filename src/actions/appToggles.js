export const toggleSearch = () => {
  return {
    type: 'TOGGLE_SEARCH'
  }
}

export const toggleTimer = () => {
  return {
    type: 'TOGGLE_TIMER'
  }
}

export const toggleCollection = () => {
  return {
    type: 'TOGGLE_COLLECTION'
  }
}

export const toggleAll = () => {
  return {
    type: 'TOGGLE_ALL'
  }
}

export const setPaused = (paused=true) => {
  return {
    type: 'SET_PAUSED',
    payload: paused
  }
}