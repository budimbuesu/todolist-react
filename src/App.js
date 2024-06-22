import { useState, useEffect } from "react";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }
  const handleTodoList = (newTodo) => {
    const tmp = [...todos, newTodo];
    persistData(tmp);
    setTodos(tmp);
  };

  function handleDeleteTodo(indexOfTodoToDelete) {
    const todosAfterDeleted = todos.filter((aTodo, index) => {
      return index !== indexOfTodoToDelete;
    });
    persistData(todosAfterDeleted);
    setTodos(todosAfterDeleted);
  }

  function handleUpdate(index) {
    const valueToBeEdited = todos[index];
    setNewTodo(valueToBeEdited);
    handleDeleteTodo(index);
  }
  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localTodos = localStorage.getItem("todos");

    if (!localTodos) {
      return;
    }

    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

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
