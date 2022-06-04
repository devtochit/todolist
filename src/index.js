const todoinput = document.querySelector('.todo-input');
const todolist = document.querySelector('.todo-list');
const todobtn = document.querySelector('.todo-btn');

// eslint-disable-next-line no-use-before-define
todobtn.addEventListener('click', addToDo);
function addToDo(event) {
  event.preventDefault();
  const toDoDiv = document.createElement('div');
  toDoDiv.classList.add('tododiv');

  const newToDo = document.createElement('li');
  if (todoinput.value === ' ') {
    alert('you must write something');
  } else {
    newToDo.innerText = todoinput.value;
    newToDo.classList.add('todo-item');
    toDoDiv.appendChild(newToDo);
  }

  const checked = document.createElement('button');
  checked.innerHTML = '<i class="fas fa-check"> </i>';
  checked.classList.add('check-btn');
  toDoDiv.appendChild(checked);

  const deleted = document.createElement('button');
  deleted.innerHTML = '<i class="fas fa-trash"></i>';
  deleted.classList.add('deleted-btn');
  toDoDiv.appendChild(deleted);

  todolist.appendChild(toDoDiv);
  todoinput.value = ' ';
}

function deletecheck(event) {
  const item = event.target;

  if (item.classList[0] === 'deleted-btn') {
    item.parentElement.classList.add('fall');
    item.parentElement.addEventListener('transitionend', () => {
      // eslint-disable-next-line no-unused-expressions
      item.parentElement.remove;
    });
  }

  if (item.classList[0] === 'check-btn') {
    item.parentElement.classList.toggle('completed');
  }
}
todolist.addEventListener('click', deletecheck);
