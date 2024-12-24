const todoInput = document.getElementById('todo-input');
const addToDoBtn = document.getElementById('add-todo-btn');
const toDoList = document.getElementById('todo-list');

// Function to create a new to-do- item
function createTodoItem(taskText) {
    const li = document.createElement('li');
    li.className = 'flex items-center justify-between p-2 border rounded-md shadow-sm bg-gray-50';
// Task Text
const span = document.createElement('span');
span.className =' flex-1';
span.textContent =taskText;

//Edit btn
const editBtn = document.createElement('button');
editBtn.className = 'px-2 py-1 bg-yellow-400 text-white font-medium rounded-md hover:bg-yellow-500 transition';
editBtn.textContent = 'Edit';
editBtn.onclick = () => editTodoItem(span, editBtn);

//Delete Button
const deleteBtn = document.createElement('button');
deleteBtn.className = 'px-2 py-1 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition';
deleteBtn.textContent = 'Delete';
deleteBtn.onclick = () => deleteTodoItem(li)

// Append elements to list item
li.appendChild(span);
li.appendChild(editBtn);
li.appendChild(deleteBtn);

return li;

};

// function to add a new to-do item
 function addTodoItem() {
    const tasktext = todoInput.ariaValueMax.trim();
    if(tasktext === '') {
        alert('Please enter a task!');
        return
    }
    const todoItem = createTodoItem(tasktext);
  toDoList.appendChild(todoItem);
  todoInput.value = '';
 }

 // Function to edit a to-do item
 function editTodoItem(span, editBtn) {
    if (editBtn.textContent === 'Edit') {
        const newTask = prompt('Edit your task:', span.textContent);
        if(newTask !== null && newTask.trim() !== '') {
            span.textContent = newTask.trim();
        }
    }
 }