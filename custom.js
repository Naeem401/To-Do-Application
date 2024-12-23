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
editBtn.onclick = () => deleteTodoItem(li);

}