import defaultVideos from '../../reducers/data/defaultVideos'
import { store } from './general'

/**
 * Grab default videos or videos in the local storage if they exist
 */
export function getInitialVideos(storageObj) {
  let currentStore = JSON.parse(localStorage.getItem(storageObj))

  // If nothing exists, populate store with default videos
  if(currentStore === null) store(defaultVideos, 'videoList')

  // Else return either default videos, or whatever is in the store
  return currentStore === null ? defaultVideos : JSON.parse(currentStore)
}

/**
 * Grab the first video from localStorage if it exists
 */
export function getFirstVideo(storageObj) {
  let theItem = JSON.parse(localStorage.getItem(storageObj))
  let isEmpty = theItem === '[]'

  return isEmpty ? false : JSON.parse(theItem)[0].id.videoId
}