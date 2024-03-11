const switchMode = (elementClasses, className1 = '', className2 = '') => {
  elementClasses.toggle(className1);
  elementClasses.toggle(className2);
};

export { switchMode };
