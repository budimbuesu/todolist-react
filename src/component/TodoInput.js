function TodoInput({ handleTodoList, newTodo, setNewTodo }) {
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
          setNewTodo("");
        }}
      >
        Add
      </button>
    </header>
  );
}

export default TodoInput;
