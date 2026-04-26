export function handelSubmitTask(event) {
  event.preventDefault();
  const { taskName, taskDescription } = event.currentTarget.elements;
  if (taskName.value.trim() === `` || taskDescription.value.trim() === ``)
    return alert('Заполните все поля');
  const task = {
    name: taskName.value.trim(),
    description: taskDescription.value.trim(),
  };
  console.log(task);
  event.currentTarget.reset();
}
