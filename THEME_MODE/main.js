import { switchMode } from './js/modeSwitch.js';
import { localStorageSetElement } from './js/localStorage/setModeLocalStorage.js';
import { toggleElements } from './js/toggleElements.js';
import { installStylesLocalStorage } from './js/localStorage/installStylesLocalStorage.js';

const btnSwitchTheme = document.querySelector('.btn__switch-mode');
const btnSwitchShades = document.querySelector('.btn__switch-shades_of_color');
const bodyClasses = document.body.classList;
const storageThemeValue = localStorage.getItem('theme-mode');
const storageShadesValue = localStorage.getItem('shades-mode');

const themesArray = Array.from(
  document.querySelector('.box_wrapper_container-text__theme').children
);

const shadesArray = Array.from(
  document.querySelector('.box_wrapper_container-text__shades').children
);

const darkLocalStorage = () => {
  localStorageSetElement(bodyClasses, 'dark', 'theme-mode', 'light');
};

const shadesLocalStorage = () => {
  localStorageSetElement(bodyClasses, 'cool', 'shades-mode', 'warm');
};

const shadesMode = () => {
  switchMode(bodyClasses, 'warm', 'cool');
};

const darkMode = () => {
  switchMode(bodyClasses, 'dark', 'light');
};

const newTextTitle = (arr) => () => {
  toggleElements(null, arr);
};

// const colorMediaIsDark = () => {
//   return (
//     window.matchMedia &&
//     window.matchMedia('(prefers-color-scheme: dark)').matches
//   );
// };

installStylesLocalStorage(
  bodyClasses,
  'dark',
  'light',
  storageThemeValue,
  newTextTitle(themesArray)
);

installStylesLocalStorage(bodyClasses, 'cool', 'warm', storageShadesValue, newTextTitle(shadesArray));

const eventsBtn = (btn, arr = []) => {
  arr.forEach((element) => {
    btn.addEventListener('click', element);
  });
};

eventsBtn(btnSwitchTheme, [darkMode, newTextTitle(themesArray), darkLocalStorage]);
eventsBtn(btnSwitchShades, [shadesMode, newTextTitle(shadesArray), shadesLocalStorage]);

