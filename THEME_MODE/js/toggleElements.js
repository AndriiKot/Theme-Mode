
const toggleElements = (_e, arr = [], className = 'active') => {
  arr.forEach((el) => {
    el.classList.toggle(className);
  });
};

export { toggleElements };
