import { useState } from "react";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleTodoList = (newTodo) => {
    const tmp = [...todos, newTodo];
    setTodos(tmp);
  };

  function handleDeleteTodo(indexOfTodoToDelete) {
    const todosAfterDeleted = todos.filter((aTodo, index) => {
      return index !== indexOfTodoToDelete;
    });
    setTodos(todosAfterDeleted);
  }

  function handleUpdate(index) {
    const valueToBeEdited = todos[index];
    setNewTodo(valueToBeEdited);
    handleDeleteTodo(index);
  }
  return (
    <>
      <TodoInput
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        handleTodoList={handleTodoList}
      />
      <TodoList
        handleUpdate={handleUpdate}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
    </>
  );
}

export default App;
