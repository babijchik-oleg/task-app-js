export function createMarkup({ name, description, id }) {
  return `
      <li class="task-list-item" data-id="${id}">
        <button class="task-list-item-btn">Delete</button>
        <h3>${name}</h3>
        <p>${description}</p>
      </li>
    `;
}

export function createMarkupList(tasks) {
  return tasks.map(task => createMarkup(task)).join('');
}
