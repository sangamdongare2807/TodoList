$(document).ready(function() {
  // Array to store todos
  let todos = [];

  // Todo creation form submission
  $('#todoForm').submit(function(event) {
    event.preventDefault();
    const title = $('#todoTitle').val();
    const description = $('#todoDescription').val();
    const todo = {
      id: Date.now(),
      title: title,
      description: description
    };
    todos.push(todo);
    $('#todoList').append(createTodoItem(todo));
    $('#todoTitle').val('');
    $('#todoDescription').val('');
  });

  // Delete todo event delegation
  $('#todoList').on('click', '.delete-todo', function() {
    const id = $(this).data('id');
    todos = todos.filter(todo => todo.id !== id);
    $(this).closest('.todo-item').remove();
  });

  // View todo event delegation
  $('#todoList').on('click', '.view-todo', function() {
    const id = $(this).data('id');
    const todo = todos.find(todo => todo.id === id);
    alert(`Title: ${todo.title}\nDescription: ${todo.description}`);
  });

  // Function to create a todo item
  function createTodoItem(todo) {
    const item = `
      <li class="list-group-item todo-item">
        <span>${todo.title}</span>
        <div class="float-right">
          <button class="btn btn-sm btn-info view-todo" data-id="${todo.id}">View</button>
          <button class="btn btn-sm btn-danger delete-todo" data-id="${todo.id}">Delete</button>
        </div>
      </li>
    `;
    return item;
  }
});
