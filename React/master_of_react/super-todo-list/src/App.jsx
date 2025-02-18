import { useReducer } from "react";
import "./App.css";
import Form from "./components/Form";
import Display from "./components/Display";

function App() {

const initialState = {
  todoList: [],
  todo: {}
}

const Reducer = (state, action) => {
  // type: createNewMovie
  // payload: [...getter, newInfo]
  switch (action.type) {

    case "DELETE_TODO":
      return {
        ...state,
        todoList: state.todoList.filter((todoItem) => todoItem.id !== action.payload)
      }

    case "TOGGLE_COMPLETED":
      return {
        ...state,
        todoList: state.todoList.map((todoItem) => {
          if (todoItem.id === action.payload) {
            //Creating a new object to hold the updated values instead of modifying the existing object:
            let newTodo = { ...todoItem }
            newTodo.markedDelete = !todoItem.markedDelete;
            //Alternatively, we can update the copies preoperty in one line:
            // let newTodo = { ...todo, markedDelete: !todo.markedDelete }
            return newTodo;
          }
          else {
            return todoItem;
          }
        })
      }

    case "ADD_TODO":
      return {
        ...state,
        todoList: [...state.todoList, action.payload]
      }
  };

}

const [state, dispatch] = useReducer(Reducer, initialState)

function deleteTodo(id) {
  dispatch({
    type: "DELETE_TODO",
    payload: id
  })
}

function toggleCompleted(id) {
  dispatch({
    type: "TOGGLE_COMPLETED",
    payload: id
  })
}

function addTodo(todoList) {
  dispatch({
    type: "ADD_TODO",
    payload: todoList
  })
}




  return (
    <div className="App">
      <Form
        addTodo={addTodo}
      />
      <Display todoList={state.todoList} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;