// Get the lists and columns
const todoList = document.getElementById('todo-list');
const inProgressList = document.getElementById('inprogress-list');
const doneList = document.getElementById('done-list');
const tasks = document.querySelectorAll('.task');

// Add event listeners for drag and drop
tasks.forEach((task) => {
  console.log({task});
  task.addEventListener('dragstart', dragStart);
  task.addEventListener('dragover', dragOver);
  task.addEventListener('drop', drop);
});

// Drag start event handler
function dragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
}

// Drag over event handler
function dragOver(event) {
  event.preventDefault();
}
function allowDrop(event){
  event.preventDefault();
}

// Drop event handler
function drop(event) {
  event.preventDefault();
  const itemId = event.dataTransfer.getData('text/plain');
  const item = document.getElementById(itemId);
  
  const clonedItem = item.cloneNode(true);
  event.target.appendChild(clonedItem);
  
  item.parentNode.removeChild(item);
}
