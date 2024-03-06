const btnSwitchTheme = document.querySelector('.btn__switch-mode');
const btnSwitchShades = document.querySelector(
  '.btn__switch-shades_of_color'
);
const boxes = Array.from(
  document.querySelector('.box_wrapper_container-text').children
);

const body = document.body;

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

const switchMode = (
  elementClasses,
  btn,
  tog1 = '',
  tog2 = '',
  keyLocalStorage = ''
) => {
  elementClasses.toggle(tog1);
  elementClasses.toggle(tog2);
  btn.innerText = elementClasses.contains(tog1) ? tog2 : tog1;
  localStorageSetElement(elementClasses, tog1, keyLocalStorage, tog2);
};

const shadesMode = () => {
  switchMode(body.classList, btnSwitchShades, 'warm', 'cool', 'shades-mode');
};

const darkMode = () => {
  switchMode(body.classList, btnSwitchTheme, 'dark', 'light', 'theme-mode');
};

const newTitle = (_e, arr = boxes, className = 'active') => {
  arr.forEach((el) => {
    el.classList.toggle(className);
  });
};

// const colorMediaIsDark = () => {
//   return (
//     window.matchMedia &&
//     window.matchMedia('(prefers-color-scheme: dark)').matches
//   );
// };

// if (localStorage.getItem("dark-mode") || colorMediaIsDark()) {
//   darkMode();
//   console.log("Dark mode");
// }

// if (localStorage.getItem("shades-mode")) {
//   shadesMode();
//   console.log("Shades mode");
// }

btnSwitchTheme.addEventListener('click', darkMode);
btnSwitchTheme.addEventListener('click', newTitle);
btnSwitchShades.addEventListener('click', shadesMode);
