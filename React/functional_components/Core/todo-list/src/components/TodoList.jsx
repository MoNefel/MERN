import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, removeTodo, toggleTodo }) {
  
  return (
    <ul>
      {/* Map through the todos array and render a TodoItem for each todo */}
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;