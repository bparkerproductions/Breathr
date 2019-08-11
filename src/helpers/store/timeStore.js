import { store, getData } from './general';

export function storeSeconds(seconds) {
  store(seconds, 'totalSeconds');
  storeTime();
}

export function getTotalSeconds() {
  return getData('totalSeconds') === '[]' ? 0 : getData('totalSeconds');
}

export function storeTime() {
  //get current date, then create new entry in localstorage
  //with the current MM-DD-YYY timestamp + total seconds for the day

  let today = new Date().toISOString().slice(0, 10);
  let timeTrack = getData('timeTrack');
  timeTrack[today] = getTotalSeconds();
  localStorage.setItem('timeTrack', JSON.stringify(timeTrack));
}