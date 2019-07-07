import defaultVideos from './../reducers/data/defaultVideos';

export function getInitialVideos(storageObj) {
  //check localStorage for videos, else return default list
  let currentStore = JSON.parse(localStorage.getItem(storageObj));
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