import { getTaskFromStore, initStore } from './js/local-storage-api';
import refs from './js/refs';
import { renderTask, renderTasks } from './js/render-tasks';
import {
  handelSubmitTask,
  handlerInitPage,
  handleRemoveTask,
} from './js/tasks';

document.addEventListener('DOMContentLoaded', handlerInitPage);

refs.form.addEventListener('submit', handelSubmitTask);
refs.list.addEventListener('click', handleRemoveTask);
