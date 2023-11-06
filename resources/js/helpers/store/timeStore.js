import { store, getData } from './general'
import { createTimeTrack } from './general'

export function storeSeconds(seconds) {
  store(seconds, 'totalSeconds')
  storeTime()
}

export function getTotalSeconds() {
  return getData('totalSeconds') === '[]' ? 0 : getData('totalSeconds')
}

export function getFormattedDate(date) {
  return date.toISOString().slice(0, 10)
}

/**
 * Get current date, then create new entry in localstorage
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

export function getTimeForDay() {
  createTimeTrack()

  return getData('timeTrack')[getFormattedDate(new Date())]
}