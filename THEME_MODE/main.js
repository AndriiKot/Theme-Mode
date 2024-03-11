import { switchMode } from './js/modeSwitch.js';
import { localStorageSetElement } from './js/localStorage/setModeLocalStorage.js';
import { toggleElements } from './js/toggleElements.js';

const btnSwitchTheme = document.querySelector('.btn__switch-mode');
const btnSwitchShades = document.querySelector('.btn__switch-shades_of_color');
const boxes = Array.from(
  document.querySelector('.box_wrapper_container-text').children
);

const body = document.body;

const darkLocalStorage = () => {
  localStorageSetElement(body.classList, 'dark', 'theme-mode', 'light');
};

const shadesLocalStorage = () => {
  localStorageSetElement(body.classList, 'cool', 'shades-mode', 'warm');
};

const shadesMode = () => {
  switchMode(body.classList, 'warm', 'cool');
};

const darkMode = () => {
  switchMode(body.classList, 'dark', 'light');
};

const newTextTitle = () => {
  toggleElements(null, boxes);
};

// const colorMediaIsDark = () => {
//   return (
//     window.matchMedia &&
//     window.matchMedia('(prefers-color-scheme: dark)').matches
//   );
// };

// if (localStorage.getItem('theme-mode')) {
if (body.classList.contains('dark')) {
  console.log('DARK!');
}
if (body.classList.contains('light')) {
  console.log('Light!!!');
}

//   if (localStorage.getItem('theme-mode') === 'dark') {
//     body.classList.add('dark');
//     body.classList.remove('light');
//   }
// }

// if (localStorage.getItem("shades-mode")) {
//   shadesMode();
//   console.log("Shades mode");
// }

btnSwitchTheme.addEventListener('click', darkMode);
btnSwitchTheme.addEventListener('click', newTextTitle);
btnSwitchTheme.addEventListener('click', darkLocalStorage);

btnSwitchShades.addEventListener('click', shadesMode);
btnSwitchShades.addEventListener('click', shadesLocalStorage);
