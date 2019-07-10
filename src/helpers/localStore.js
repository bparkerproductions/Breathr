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

export function checkVisitCount() {
  return JSON.parse(localStorage.getItem('visitAmounts'));
}

export function incrementVisitCount() {
  let visitCount = JSON.parse(localStorage.getItem('visitAmounts'));

  //first visit, set to one
  if(visitCount === null) localStorage.setItem('visitAmounts', 1);

  //they visited again, increment the value
  else localStorage.setItem('visitAmounts', visitCount + 1);
}

export function store(newArray, storageObj) {
  let stringified = JSON.stringify(newArray);
  localStorage.setItem(storageObj, JSON.stringify(stringified));
}