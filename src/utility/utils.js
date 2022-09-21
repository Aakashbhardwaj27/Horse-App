export const debounce = (cb, d) => {
  let timer;
  return function(...args) {
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
      cb(...args);
    }, d);
  };
};
