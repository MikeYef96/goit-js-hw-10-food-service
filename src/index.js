import './styles.css';
import menu from './menu.json';
import templateItem from './templates/templates.hbs';
import { registerDecorator } from 'handlebars';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  menu: document.querySelector('ul.js-menu'),
  switch: document.querySelector('#theme-switch-toggle'),
};

const menuItem = templateItem(menu);
refs.menu.insertAdjacentHTML('afterbegin', menuItem);

refs.body.classList.add(localStorage.getItem('theme'));

if (localStorage.getItem('theme') === Theme.DARK) {
  refs.switch.checked = true;
} else {
  refs.body.setAttribute('class', 'light-theme');
}

refs.switch.addEventListener('click', themeChanger);

function themeChanger() {
  if (refs.switch.checked) {
    localStorage.setItem('theme', Theme.DARK);
    refs.body.setAttribute('class', 'dark-theme');
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    refs.body.setAttribute('class', 'light-theme');
  }
}
