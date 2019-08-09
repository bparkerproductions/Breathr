const totalMinutesReducer = (seconds=0, action) => {
  if(action.type === 'INCREMENT_SECOND') seconds++;
  return seconds;
}

export default {
  totalMinutesReducer
}
