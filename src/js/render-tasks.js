import { createMarkup, createMarkupList } from './markup-tasks';
import refs from './refs';

export function renderTask(task) {
  refs.list.insertAdjacentHTML('beforeend', createMarkup(task));
}

export function renderTasks(tasks) {
  refs.list.innerHTML = createMarkupList(tasks);
}
