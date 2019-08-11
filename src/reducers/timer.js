import { storeSeconds, getTotalSeconds } from './../helpers/store/timeStore';

const totalMinutesReducer = (seconds=getTotalSeconds(), action) => {
  if(action.type === 'INCREMENT_SECOND') {
    seconds++;
    storeSeconds(seconds);
  }

  return seconds;
}

export default {
  totalMinutesReducer
}
