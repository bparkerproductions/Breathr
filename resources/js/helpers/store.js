export function checkVisitCount() {
  return getData('visitAmounts')
}

export function incrementVisitCount() {
  // Set first visit, set to one
  if (getData('visitAmounts') === null) localStorage.setItem('visitAmounts', 1)

  // They visited again, increment the value
  else localStorage.setItem('visitAmounts', getData('visitAmounts') + 1)
}

/**
 * Store a generic object in local storage
 */
export function store(newArray, storageObj) {
  let stringified = JSON.stringify(newArray)
  localStorage.setItem(storageObj, JSON.stringify(stringified))
}

/**
 * Get a generic object from local storage
 */
export function getData(obj) {
  return JSON.parse(localStorage.getItem(obj))
}

/**
 * Create the initial object in local storage for tracking session minutes
 */
export function createTimeTrack() {
  if (getData('timeTrack') === null) store({}, 'timeTrack')
}

/**
 * Convert date to a JSON friendly format
 */
export function getFormattedDate(date) {
  return date.toISOString().slice(0, 10)
}

/**
 * Get current date, then create new entry in localStorage
 * with the current MM-DD-YYY timestamp + total seconds for the day
 */
export function storeTime() {
  let timeTrack = getData('timeTrack') === '{}' ? JSON.parse(getData('timeTrack')) : getData('timeTrack')

  if (timeTrack[getFormattedDate(new Date())] === undefined) {
    timeTrack[getFormattedDate(new Date())] = 0
  }

  timeTrack[getFormattedDate(new Date())]++
  localStorage.setItem('timeTrack', JSON.stringify(timeTrack))
}

/**
 * Get time for today's date
 */
export function getTimeForDay() {
  createTimeTrack()

  return getData('timeTrack')[getFormattedDate(new Date())]
}
