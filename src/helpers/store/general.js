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