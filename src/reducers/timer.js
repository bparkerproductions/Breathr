import { storeSeconds, getTotalSeconds, getTimeForDay } from './../helpers/store/timeStore';

const totalSecondsReducer = (seconds=getTotalSeconds(), action) => {
  //TOTAL seconds for every day
  if(action.type === 'INCREMENT_SECOND') {
    seconds++;
    storeSeconds(seconds);
  }

  return seconds;
}

const secondsForDay = (seconds=getTimeForDay(), action) => {
  //Seconds for the current 24h day
  if(seconds === undefined) return 0;

  if(action.type === 'INCREMENT_SECOND') seconds++;
  return seconds;
}

export default {
  totalSecondsReducer,
  secondsForDay
}
