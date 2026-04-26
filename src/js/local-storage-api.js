export function setTaskToStore(task) {
  const tasks = getTaskFromStore() || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function getTaskFromStore() {
  return JSON.parse(localStorage.getItem('tasks'));
}

export function initStore() {
  const tasks = getTaskFromStore() || [];
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function removeTaskFromStore(id) {
  const tasks = getTaskFromStore();
  const newTasks = tasks.filter(item => item.id !== id);
  localStorage.setItem('tasks', JSON.stringify(newTasks));
}

export function setThemeToStore(theme) {
  localStorage.setItem('theme', theme);
}

export function getThemeFromStore() {
  return localStorage.getItem('theme');
}
