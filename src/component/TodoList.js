import TodoCard from "./TodoCard";

function TodoList() {
  let todos = [
    "Eat more fruits and vege",
    "Pick up the kids from school",
    "do bicyclette",
  ];

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
