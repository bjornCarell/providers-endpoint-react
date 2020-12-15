export const delay = (callback, x, time) =>
  setTimeout(() => callback && callback(x), time);
