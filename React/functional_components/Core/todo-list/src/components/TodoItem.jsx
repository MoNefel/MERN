import React from 'react';

function TodoItem({ todo, index, removeTodo, toggleTodo }) {

  return (
    <li>
      {/* Display the todo text with a line-through if completed */}
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>

      {/* Checkbox to toggle the completion status of the todo */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(index)}
      />
      
      {/* Button to remove the todo */}
      <button onClick={() => removeTodo(index)}>Delete</button>
    </li>
  );
}

export default TodoItem;