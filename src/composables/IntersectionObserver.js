export const onIntersect = (
  elementToWatch,
  callback,
  outCallback,
  options = { threshold: 1 }
) => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry && entry.isIntersecting) {
      callback(entry.target);
    } else {
      outCallback(entry.target);
    }
  }, options);

  observer.observe(elementToWatch);

  return observer;
};