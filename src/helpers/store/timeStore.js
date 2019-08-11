import { store } from './general';

export function storeSeconds(seconds) {
  store(seconds, 'totalSeconds');
}

export function getTotalSeconds() {
  let totalSeconds = JSON.parse(localStorage.getItem('totalSeconds'));
  return totalSeconds === '[]' ? 0 : totalSeconds;
}