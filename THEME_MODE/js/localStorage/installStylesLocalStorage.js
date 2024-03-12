
const installStylesLocalStorage = (
  element,
  style1,
  style2,
  getLocalStorage,
  fn = () => {}
) => {
  if (!element.contains(getLocalStorage)) {
    element.toggle(style1);
    element.toggle(style2);
    fn();
  }
};

export { installStylesLocalStorage };

