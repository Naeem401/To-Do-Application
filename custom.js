const todoInput = document.getElementById('todo-input');
const addToDoBtn = document.getElementById('add-todo-btn');
const toDoList = document.getElementById('todo-list');

// Function to create a new to-do item
function createTodoItem(taskText) {
    const li = document.createElement('li');
    li.className = 'flex items-center justify-between p-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-gray-200';
    
    // Task Text
    const span = document.createElement('span');
    span.className = 'flex-1';
    span.textContent = taskText;

    // Edit Button
    const editBtn = document.createElement('button');
    editBtn.className = 'px-2 py-1 bg-yellow-500 text-gray-900 font-medium rounded-md hover:bg-yellow-600 transition';
    editBtn.textContent = 'Edit';
    editBtn.onclick = () => editTodoItem(span, editBtn);

    // Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'px-2 py-1 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => deleteTodoItem(li);

    // Append elements to list item
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    return li;
}

// Function to add a new to-do item
function addTodoItem() {
    const taskText = todoInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    const todoItem = createTodoItem(taskText);
    toDoList.appendChild(todoItem);
    todoInput.value = '';
}

// Function to edit a to-do item
function editTodoItem(span, editBtn) {
    if (editBtn.textContent === 'Edit') {
        const newTask = prompt('Edit your task:', span.textContent);
        if (newTask !== null && newTask.trim() !== '') {
            span.textContent = newTask.trim();
        }
    }
}

// Function to delete a to-do item
function deleteTodoItem(li) {
    li.remove();
}

// Add event listener for the Add button
addToDoBtn.addEventListener('click', addTodoItem);

// Allow pressing "Enter" to add tasks
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodoItem();
    }
});
