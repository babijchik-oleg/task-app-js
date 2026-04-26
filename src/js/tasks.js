import { nanoid } from 'nanoid';
import { renderTask, renderTasks } from './render-tasks';
import {
  initStore,
  removeTaskFromStore,
  setTaskToStore,
  getTaskFromStore,
  getThemeFromStore,
} from './local-storage-api';
import { changeThemeByStore } from './theme-switcher';

export function handelSubmitTask(event) {
  event.preventDefault();
  const { taskName, taskDescription } = event.currentTarget.elements;
  if (taskName.value.trim() === `` || taskDescription.value.trim() === ``)
    return alert('Заполните все поля');

  const task = {
    name: taskName.value.trim(),
    description: taskDescription.value.trim(),
    id: nanoid(),
  };
  renderTask(task);
  setTaskToStore(task);
  event.currentTarget.reset();
}

export function handlerInitPage() {
  initStore();
  renderTasks(getTaskFromStore());
  changeThemeByStore(getThemeFromStore());
}

export function handleRemoveTask(event) {
  if (event.target.nodeName !== 'BUTTON') return;

  const task = event.target.parentElement;
  const taskID = task.dataset.id;

  removeTaskFromStore(taskID);
  task.remove();
}
