import { useState } from "react";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([
    "Eat more fruits and vege",
    "go to gym",
    "call my mom",
    "meditation",
  ]);

  const handleTodoList = (newTodo) => {
    const tmp = [...todos, newTodo];
    setTodos(tmp);
  };

  return (
    <>
      <TodoInput handleTodoList={handleTodoList} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
