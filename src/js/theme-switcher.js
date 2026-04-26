import { setThemeToStore } from './local-storage-api';
import refs from './refs';

export function changeTheme(event) {
  if (event.target !== event.currentTarget) return;

  if (refs.body.classList.contains('theme-dark')) {
    refs.body.classList.remove('theme-dark');
    setThemeToStore('theme-light');
  } else {
    refs.body.classList.add('theme-dark');
    setThemeToStore('theme-dark');
  }
}

export function changeThemeByStore(theme) {
  if (theme === 'theme-light') {
    refs.body.classList.remove('theme-dark');
  } else {
    refs.body.classList.add('theme-dark');
  }
}
