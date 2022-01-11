export function checkVisitCount() {
  return getData('visitAmounts')
}

export function incrementVisitCount() {
  //first visit, set to one
  if(getData('visitAmounts') === null) localStorage.setItem('visitAmounts', 1);

  //they visited again, increment the value
  else localStorage.setItem('visitAmounts', getData('visitAmounts') + 1);
}

export function store(newArray, storageObj) {
  let stringified = JSON.stringify(newArray);
  localStorage.setItem(storageObj, JSON.stringify(stringified));
}

export function getData(obj) {
  return JSON.parse(localStorage.getItem(obj));
}

export function createTimeTrack() {
  if(getData('timeTrack') === null) store({}, 'timeTrack');
}
