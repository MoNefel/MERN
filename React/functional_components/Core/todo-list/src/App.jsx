import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {

  // State to hold the list of todos
  const [todos, setTodos] = useState([]);
  
  // State to hold the current input value
  const [inputValue, setInputValue] = useState('');

  // Function to add a new todo to the list
  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  // Function to remove a todo from the list by index
  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  // Function to toggle the completion status of a todo by index
  const toggleTodo = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      {/* TodoList component to display the list of todos */}
      <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
