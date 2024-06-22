import { useState } from "react";

function TodoInput(props) {
  const { handleTodoList } = props;
  const [newTodo, setNewTodo] = useState("");
  return (
    <header>
      <input
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
        placeholder="Enter todo..."
      />
      <button
        onClick={() => {
          handleTodoList(newTodo);
        }}
      >
        Add
      </button>
    </header>
  );
}

export default TodoInput;
