import TodoCard from "./TodoCard";

function TodoList({ todos }) {
  return (
    <ul className="main">
      {todos.map((todo, index) => {
        return (
          <TodoCard key={index}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}

export default TodoList;
