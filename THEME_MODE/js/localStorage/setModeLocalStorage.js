
const localStorageSetElement = (
  classList,
  className = '',
  key = '',
  otherValue = ''
) => {
  if (classList.contains(className)) {
    localStorage.setItem(key, className);
  } else {
    localStorage.setItem(key, otherValue);
  }
};

export { localStorageSetElement };
