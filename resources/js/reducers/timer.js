import { storeSeconds, getTotalSeconds, getTimeForDay } from './../helpers/store/timeStore'

/**
 * Toggles total seconds elapsed and stores the new result in local storage
 */
const totalSecondsReducer = (seconds=getTotalSeconds(), action) => {
  // TOTAL seconds for every day
  if (action.type === 'INCREMENT_SECOND') {
    seconds++
    storeSeconds(seconds)
  }

  return seconds
}

/**
 * Toggles total seconds elapsed for the dayand stores the new result in local storage
 */
const secondsForDay = (seconds=getTimeForDay(), action) => {
  // Seconds for the current 24h day
  if (seconds === undefined) return 0

  if(action.type === 'INCREMENT_SECOND') seconds++
  return seconds
}

const timerReducers = {
  totalSecondsReducer,
  secondsForDay
}

export default timerReducers
