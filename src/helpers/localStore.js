import defaultVideos from './../reducers/data/defaultVideos';

export function getInitialVideos(storageObj) {
  let currentStore = JSON.parse(localStorage.getItem(storageObj));

  //if nothing exists, populate store with default videos
  if(currentStore === null) store(defaultVideos, 'videoList');

  //return either default videos, or whatever is in the store
  return currentStore === null ? defaultVideos : JSON.parse(currentStore)
}

export function getFirstVideo(storageObj) {
  let theItem = JSON.parse(localStorage.getItem(storageObj));
  let isEmpty = theItem === '[]';

  return isEmpty ? false : JSON.parse(theItem)[0].id.videoId;
}

export function store(newArray, storageObj) {
  let stringified = JSON.stringify(newArray);
  localStorage.setItem(storageObj, JSON.stringify(stringified));
}